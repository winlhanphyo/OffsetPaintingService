import sequelize, { Sequelize } from "sequelize";
import { FindOptions, Op, fn } from "sequelize";
import { CategoryDbModel, IProductModel, ProductDbModel, UserDbModel, MediaDbModel, PackageDbModel, IPackageModel } from "../../database";

class PackageService {
  /**
   * get events list.
   * @param eventAttributes 
   * @param otherFindOptions 
   * @returns 
   */
  async getPackageList(packageAttributes?: Array<any>, otherFindOptions?: any, offset?: number, limit?: number, res?: any, status?: any): Promise<any> {
    try {
      limit = limit && limit > 0 ? limit : undefined;

      let productFindOption = status ?
      {
        where: { 
          status
        }
      } : null;

      const packageList = await PackageDbModel.findAll({
        attributes: packageAttributes,
        ...otherFindOptions,
        limit,
        offset,
        include: [
          {
            model: ProductDbModel,
            as: 'product',
            ...productFindOption,
            required: false,
          }
        ]
      });

      // for (let i = 0; i < productList.length; i++) {
        // const packageData: any = productList[i]?.dataValues?.package;
        // for (let j = 0; j < packageData?.length; j++) {
          // if (packageData[j].type === "photo") {
            // packageData[j].dataValues.cover = packageData[j]?.url;
          // }
        // }
      // }
      
      const packageCount = await PackageDbModel.count({
        ...otherFindOptions // Apply the same OR condition to the count
      });

      return res.json({
        success: true,
        count: packageCount,
        data: packageList,
        offset: offset

      });

    } catch (e: any) {
      console.log('------get package list API error----', e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  /**
   * get top product.
   * @param req 
   * @param res 
   * @returns 
   */
  // async getTopProduct(req: any, res: any) {
  //   try {
  //     const productCount = await ProductDbModel.count();
  //     const randomProductOffset = Math.floor(Math.random() * productCount);

  //     // Generate a random offset for the media
  //     const mediaCount = await MediaDbModel.count({
  //       where: {
  //         type: "photo" // You may want to filter for photo type here
  //       }
  //     });
  //     const randomMediaOffset: number = Math.floor(Math.random() * mediaCount);

  //     const productList = await ProductDbModel.findAll({
  //       limit: 6,
  //       // offset: 0,
  //       // offset: randomProductOffset,
  //       order: Sequelize.literal('rand()'),
  //       include: [
  //         {
  //           model: CategoryDbModel,
  //           foreignKey: 'categoryId',
  //           as: 'category'
  //         },
  //         {
  //           model: MediaDbModel,
  //           as: 'media',
  //           required: false,
  //           where: {
  //             type: "photo"
  //           },
  //           // order: Sequelize.literal('rand()'), // Order the media records randomly
  //           // limit: 1, // Limit to only 1 random media record
  //           // offset: Number(randomMediaOffset) // Use the random media offset
  //         }
  //       ]
  //     });

  //     console.log('product list', productList)

  //     const videoData = await MediaDbModel.findOne({
  //       where: {
  //         type: "video"
  //       },
  //       order: Sequelize.literal('rand()')
  //     });

  //     for (let i = 0; i < productList.length; i++) {
  //       const mediaData: any = productList[i]?.dataValues?.media;
  //       for (let j = 0; j < mediaData?.length; j++) {
  //         if (mediaData[j]?.dataValues?.type === "video") {
  //           mediaData[j].dataValues.cover = "upload/user/video/default.jpg";
  //         } else if (mediaData[j].type === "music") {
  //           mediaData[j].dataValues.cover = "upload/user/music/default.jpg";
  //         } else if (mediaData[j].type === "text") {
  //           mediaData[j].dataValues.cover = "upload/user/text/default.jpg";
  //         } else if (mediaData[j].type === "photo") {
  //           mediaData[j].dataValues.cover = mediaData[j]?.url;
  //         }
  //       }
  //     }
    
  //     return res.json({
  //       success: true,
  //       data: productList,
  //       video: videoData
  //     });

  //   } catch (e: any) {
  //     console.log('------get product list API error----', e);
  //     return res.status(400).json({
  //       success: false,
  //       message: e.toString()
  //     });
  //   }
  // }

  /**
   * create product data.
   * @param productObj 
   * @returns 
   */
  async createPackage(req: any, res: any): Promise<PackageDbModel> {
    try {

      const packageData: IPackageModel = {
        name: req.body.name,
        description: req.body.description,
        status: req.body?.status,
        categoryId: req.body.categoryId,
        createdUserId: req.headers['userid']
      } as any;

      const createPackage: any = await PackageDbModel.create({ ...packageData, createdAt: new Date().toISOString() });

      // if (req?.files?.media?.length > 0) {
      //   const files = req.files;
      //   const mediaData = [];
      //   for (let i = 0; i < files?.media?.length; i++) {
      //     let type = null;
      //     const url = files?.media[i].path?.split("\\").join("/");
      //     console.log('file', files?.media[i].originalname);
      //     const splitUrl = url.split("/");
      //     if (files.media[i].mimetype.startsWith('image')) {
      //       type = "photo";
      //     }
      //     const filename = files?.media[i].originalname.split(".");
      //     mediaData.push({
      //       name: filename[0],
      //       type,
      //       url,
      //       status: "available"
      //     });
      //   }
      //   const media = await MediaDbModel.bulkCreate(mediaData);

      //   await createPackage.setMedia(media);
      // }

      return res.json({
        success: true,
        message: 'Package is created successfully',
        data: createPackage
      });
    } catch (e: any) {
      console.log("-----Create Package API error----", e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  /**
   * update Package data.
   * @param req 
   * @param res 
   */
  async updatePackage(req: any, res: any): Promise<any> {
    try {
      const id = +req.params.id;

      const packageData: IPackageModel = {
        name: req.body.name,
        description: req.body.description,
        status: req.body?.status,
        categoryId: req.body.categoryId,
        updatedUserId: req.headers['userid']
      } as any;

      const updatePackage = await PackageDbModel.update(packageData, {
        where: { id: id as number }
      });

      // if (req?.files?.media?.length > 0) {
      //   const files = req.files;
      //   const mediaData = [];
      //   for (let i = 0; i < files?.media?.length; i++) {
      //     let type = null;
      //     const url = files?.media[i].path?.split("\\").join("/");
      //     console.log('file', files?.media[i].originalname);
      //     const splitUrl = url.split("/");
      //     if (files.media[i].mimetype.startsWith('image')) {
      //       type = "photo";
      //     }
      //     const filename = files?.media[i].originalname.split(".");
      //     mediaData.push({
      //       name: filename[0],
      //       type,
      //       url,
      //       status: "available"
      //     });
      //   }
      //   const media = await MediaDbModel.bulkCreate(mediaData);

      //   // Ensure updateProduct is a proper instance
      //   if (updateProduct && id) {
      //     const updatedProductInstance = await ProductDbModel.findOne({
      //       where: {
      //         id
      //       },
      //       include: [
      //         {
      //           model: MediaDbModel,
      //           as: "media"
      //         }
      //       ]
      //     }) as any;

      //     // Associate media with product
      //     if (updatedProductInstance) {
      //       await updatedProductInstance.setMedia(media);
      //     }
      //   }
      // }
      return res.json({
        success: true,
        message: 'Package is updated successfully',
        data: updatePackage
      });
    } catch (e: any) {
      console.log('------update package error----', e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  /**
   * delete package.
   * @param req
   * @param res 
   * @returns 
   */
  async deletePackage(req: any, res: any): Promise<PackageDbModel> {
    try {
      const id = req.params.id;

      const detailPackage = await PackageDbModel.findOne({
        where: {
          id
        }
      }) as any;

      if (!detailPackage) {
        return res.status(400).json({
          message: "Package is not found by this id"
        });
      }

      const removePackageData = await PackageDbModel.destroy(
        {
          where: {
            id
          },
        }
      );

      return res.json({
        success: true,
        message: `Delete Package is successful.`,
        data: removePackageData
      });
    } catch (e: any) {
      console.log("Delete Package API Error", e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  /**
   * get Package by Id.
   * @param package_id 
   * @returns 
   */
  async getPackageById(package_id: number, res: any): Promise<any> {
    try {
      const packageData = await PackageDbModel.findOne({
        where: {
          id: package_id
        },
        include: [
          // {
          //   model: CategoryDbModel,
          //   foreignKey: "categoryId",
          //   as: "category"
          // },
          // {
          //   model: UserDbModel,
          //   through: { attributes: [] },
          //   as: "createdProductUser",
          //   attributes: []
          // }
        ]
      }) as any;
      if (!packageData) {
        return res.status(404).json({
          message: "Package data is not found by this id"
        });
      }

      return res.json({
        success: true,
        data: packageData
      })
    } catch (e: any) {
      console.log("--Get Package By Id API Error---", e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  /**
   * get product with category id.
   * @param category_id 
   * @param res 
   */
  // async getProductWithCategoryId(category_id: number, res: any): Promise<any> {
  //   try {
  //     const packageData = await ProductDbModel.findAll({
  //       where: {
  //         categoryId: category_id
  //       },
  //       include: [
  //         {
  //           model: CategoryDbModel,
  //           foreignKey: "categoryId",
  //           as: "category"
  //         },
  //         {
  //           model: MediaDbModel,
  //           as: "media",
  //         }
  //       ]
  //     }) as any;
  //     if (!packageData) {
  //       return res.status(404).json({
  //         message: "Product data with category id is not found"
  //       });
  //     }

  //     for (let i = 0; i < packageData.length; i++) {
  //       const mediaData: any = packageData[i]?.dataValues?.media;
  //       for (let j = 0; j < mediaData?.length; j++) {
  //         mediaData[j].dataValues.image = mediaData[j]?.url;
  //       }
  //     }

  //     return res.json({
  //       success: true,
  //       data: packageData
  //     })
  //   } catch (e: any) {
  //     console.log("--Get Product By Id API Error---", e);
  //     return res.status(400).json({
  //       success: false,
  //       message: e.toString()
  //     });

  //   }
  // }
}

export const packageService = new PackageService();