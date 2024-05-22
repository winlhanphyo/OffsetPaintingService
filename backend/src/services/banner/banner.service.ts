import { FindOptions } from "sequelize";
import { BannerDbModel, IBannerModel, UserDbModel } from "../../database";
import { deleteFile } from "../../utils/utils";

class BannerService {
  /**
   * get banner list.
   * @param eventAttributes 
   * @param otherFindOptions 
   * @returns 
   */
  async getBannerList(bannerAttributes?: Array<any>, otherFindOptions?: any, offset?: number, limit?: number, res?: any): Promise<any> {
    try {
      limit = limit && limit > 0 ? limit : undefined;

      let bannerList = await BannerDbModel.findAll({
        attributes: bannerAttributes,
        limit,
        offset,
        ...otherFindOptions
      });

      const bannerCount = await BannerDbModel.count({
        ...otherFindOptions
      });

      for (let i = 0; i < bannerList?.length; i++) {
        if (bannerList[i].dataValues.type === "photo") {
          bannerList[i].dataValues.cover = bannerList[i]?.dataValues?.url;
        }
      }

      return res.json({
        success: true,
        count: bannerCount,
        data: bannerList,
        offset: offset

      });

    } catch (e: any) {
      console.log('------get banner list API error----', e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  async createBanner(req: any, res: any) {
    try {
      let image: string = req.body.image;
      if (req.files?.image?.length > 0) {
        image = req.files.image[0].path?.split("\\").join("/");
      }

      const bannerObj: any = {
        image: image,
        createdUserId: req.headers['userid']
      } as any;

      const createBanner = await BannerDbModel.create({ ...bannerObj, createdAt: new Date().toISOString() });
      return res.json({
        success: true,
        message: 'Banner is created successfully',
        data: createBanner
      });
    } catch (e: any) {
      console.log("-----Create Banner API error----", e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  /**
   * delete banner.
   * @param req
   * @param res 
   * @returns 
   */
  async deleteBanner(req: any, res: any): Promise<BannerDbModel> {
    try {
      const id = req.params.id;

      const detailBanner = await BannerDbModel.findOne({
        where: {
          id
        }
      }) as any;

      if (!detailBanner) {
        return res.status(400).json({
          message: "Banner is not found by this id"
        });
      }

      const removeBannerData = await BannerDbModel.destroy(
        {
          where: {
            id
          },
        }
      );

      return res.json({
        success: true,
        message: `Delete Banner is successful.`,
        data: removeBannerData
      });
    } catch (e: any) {
      console.log("Delete Banner API Error", e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

/**
   * get Banner by Id.
   * @param banner_id 
   * @returns 
   */
async getBannerById(banner_id: number, res: any = null): Promise<any> {
  try {
    const bannerData = await BannerDbModel.findOne({
      where: {
        id: banner_id
      },
      include: [
        {
          model: UserDbModel,
          foreignKey: "createdUserId",
          as: "createdBannerByUser"
        },
        {
          model: UserDbModel,
          foreignKey: "updatedUserId",
          as: "updatedBannerByUser"
        }
      ]
    }) as any;
    console.log('Banner Data', bannerData);
    if (!bannerData) {
      return res.status(404).json({
        success: false,
        message: "Banner data is not found by this id"
      });
    }

    if (res) {
      return res.json({
        data: bannerData
      })
    } else {
      return bannerData;
    }

  } catch (e: any) {
    console.log("--Get Banner By Id API Error---", e);
    if (res) {
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    } else {
      return null;
    }
  }
}

  /**
   * change banner service.
   * @param req 
   * @param res 
   * @returns 
   */
  async changeBanner(req: any, res: any) {
    try {
      const id = +req.params.id;
      const detailBanner = await this.getBannerById(id);

      if (!detailBanner) {
        return res.status(404).send("Banner is not found");
      }

      const bannerObj: IBannerModel = {
        image: req.body.image,
        updatedUserId: req.headers['userid'],
        updatedAt: new Date().toISOString()
      } as any;

      let image: any = req.body.image;
      if (req.files?.image?.length > 0) {
        image = req.files.image[0].path?.split("\\").join("/");
        if (detailBanner.image) {
          deleteFile(detailBanner.image);
        }
        if (detailBanner) {
          bannerObj.image = image;
        }
      }

      const updateBannerData = await BannerDbModel.update(bannerObj, {
        where: { id: id as number }
      });
      return res.json({
        success: true,
        message: 'Banner is updated successfully',
        data: updateBannerData
      });
    } catch (e: any) {
      console.log('------update Banner status error----', e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }
}

export const bannerService = new BannerService();