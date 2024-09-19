import sequelize, { Sequelize } from "sequelize";
import { FindOptions, Op, fn } from "sequelize";
import { CategoryDbModel, IProductModel, ProductDbModel, UserDbModel, MediaDbModel, ProductMediaDbModel } from "../../database";

class ProductService {
  /**
   * get events list.
   * @param eventAttributes 
   * @param otherFindOptions 
   * @returns 
   */
  async getProductList(productAttributes?: Array<any>, otherFindOptions?: any, offset?: number, limit?: number, res?: any, status?: any): Promise<any> {
    try {
      limit = limit && limit > 0 ? limit : undefined;

      let mediaFindOption = status ?
      {
        where: {
          status
        }
      } : null;

      const productList = await ProductDbModel.findAll({
        attributes: productAttributes,
        ...otherFindOptions,
        limit,
        offset,
        include: [
          {
            model: CategoryDbModel,
            foreignKey: 'categoryId',
            as: 'category'
          },
          {
            model: MediaDbModel,
            as: 'media',
            ...mediaFindOption,
            required: false,
          }
        ]
      });

      for (let i = 0; i < productList.length; i++) {
        const mediaData: any = productList[i]?.dataValues?.media;
        for (let j = 0; j < mediaData?.length; j++) {
          if (mediaData[j].type === "photo") {
            mediaData[j].dataValues.cover = mediaData[j]?.url;
          }
        }
      }
      
      const productCount = await ProductDbModel.count({
        ...otherFindOptions // Apply the same OR condition to the count
      });

      return res.json({
        success: true,
        count: productCount,
        data: productList,
        offset: offset

      });

    } catch (e: any) {
      console.log('------get product list API error----', e);
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
  async getTopProduct(req: any, res: any) {
    try {
      const productCount = await ProductDbModel.count();
      const randomProductOffset = Math.floor(Math.random() * productCount);

      // Generate a random offset for the media
      const mediaCount = await MediaDbModel.count({
        where: {
          type: "photo" // You may want to filter for photo type here
        }
      });
      const randomMediaOffset: number = Math.floor(Math.random() * mediaCount);

      const productList = await ProductDbModel.findAll({
        limit: 6,
        // offset: 0,
        // offset: randomProductOffset,
        order: Sequelize.literal('rand()'),
        include: [
          {
            model: CategoryDbModel,
            foreignKey: 'categoryId',
            as: 'category'
          },
          {
            model: MediaDbModel,
            as: 'media',
            required: false,
            where: {
              type: "photo"
            },
            // order: Sequelize.literal('rand()'), // Order the media records randomly
            // limit: 1, // Limit to only 1 random media record
            // offset: Number(randomMediaOffset) // Use the random media offset
          }
        ]
      });

      console.log('product list', productList)

      for (let i = 0; i < productList.length; i++) {
        const mediaData: any = productList[i]?.dataValues?.media;
        for (let j = 0; j < mediaData?.length; j++) {
          if (mediaData[j].type === "photo") {
            mediaData[j].dataValues.cover = mediaData[j]?.url;
          }
        }
      }
    
      return res.json({
        success: true,
        data: productList
      });

    } catch (e: any) {
      console.log('------get product list API error----', e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  /**
   * create product data.
   * @param productObj 
   * @returns 
   */
  async createProduct(req: any, res: any): Promise<ProductDbModel> {
    try {

      const productData: IProductModel = {
        name: req.body.name,
        description: req.body.description,
        status: req.body?.status,
        categoryId: req.body.categoryId,
        createdUserId: req.headers['userid']
      } as any;

      productData.printingType = req.body?.printingType ? req.body.printingType : "";
      productData.quantity = req.body?.quantity ? req.body.quantity : false;
      productData.sheet = req.body?.sheet ? req.body.sheet : false;
      productData.type = req.body?.type ? req.body.type : "";
      productData.gsm = req.body?.gsm ? req.body.gsm : "";
      productData.width = req.body?.width ? req.body.width : "";
      productData.height = req.body?.height ? req.body.height : "";
      productData.depth = req.body?.depth ? req.body.depth : "";
      productData.ratioFullSize = req.body?.ratioFullSize ? req.body.ratioFullSize : "";
      productData.ratioWidth = req.body?.ratioWidth ? req.body.ratioWidth : "";
      productData.ratioHeight = req.body?.ratioHeight ? req.body.ratioHeight : "";
      productData.format = req.body?.format ? req.body.format : "";
      productData.colorF = req.body?.colorF ? req.body.colorF : "";
      productData.colorB = req.body?.colorB ? req.body.colorB : "";
      productData.lam = req.body?.lam ? req.body.lam : "";
      productData.biType = req.body?.biType ? req.body.biType : "";
      productData.paperPrice = req.body?.paperPrice ? req.body.paperPrice : "";
      productData.pressPrice = req.body?.pressPrice ? req.body.pressPrice : "";
      productData.lamSqPrice = req.body?.lamSqPrice ? req.body.lamSqPrice : "";

      productData.ctpPrice = req.body?.ctpPrice ? req.body.ctpPrice : "";
      productData.waste = req.body?.waste ? req.body.waste : "";
      productData.abbb = req.body?.abbb ? req.body.abbb : "";

      productData.dieCut = req.body?.dieCut ? req.body.dieCut : "";
      productData.gluding = req.body?.gluding ? req.body.gluding : "";
      productData.plySet = req.body?.plySet ? req.body.plySet : "";
      productData.biPrice = req.body?.biPrice ? req.body.biPrice : "";
      productData.other = req.body?.other ? req.body.other : "";
      productData.cover = req.body?.cover ? req.body.cover : "";
      productData.remark = req.body?.remark ? req.body.remark : "";

      const createProduct: any = await ProductDbModel.create({ ...productData, createdAt: new Date().toISOString() });

      if (req?.files?.media?.length > 0) {
        const files = req.files;
        const mediaData = [];
        for (let i = 0; i < files?.media?.length; i++) {
          let type = null;
          const url = files?.media[i].path?.split("\\").join("/");
          console.log('file', files?.media[i].originalname);
          const splitUrl = url.split("/");
          if (files.media[i].mimetype.startsWith('image')) {
            type = "photo";
          }
          const filename = files?.media[i].originalname.split(".");
          mediaData.push({
            name: filename[0],
            type,
            url,
            status: "available"
          });
        }
        const media = await MediaDbModel.bulkCreate(mediaData);

        await createProduct.setMedia(media);
      }

      return res.json({
        success: true,
        message: 'Product is created successfully',
        data: createProduct
      });
    } catch (e: any) {
      console.log("-----Create Product API error----", e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  /**
   * update Product data.
   * @param req 
   * @param res 
   */
  async updateProduct(req: any, res: any): Promise<any> {
    try {
      const id = +req.params.id;

      const productData: IProductModel = {
        name: req.body.name,
        description: req.body.description,
        status: req.body?.status,
        categoryId: req.body.categoryId,
        updatedUserId: req.headers['userid']
      } as any;

      productData.printingType = req.body?.printingType ? req.body.printingType : "";
      productData.quantity = req.body?.quantity ? req.body.quantity : false;
      productData.sheet = req.body?.sheet ? req.body.sheet : false;
      productData.type = req.body?.type ? req.body.type : "";
      productData.gsm = req.body?.gsm ? req.body.gsm : "";
      productData.width = req.body?.width ? req.body.width : "";
      productData.height = req.body?.height ? req.body.height : "";
      productData.depth = req.body?.depth ? req.body.depth : "";
      productData.ratioFullSize = req.body?.ratioFullSize ? req.body.ratioFullSize : "";
      productData.ratioWidth = req.body?.ratioWidth ? req.body.ratioWidth : "";
      productData.ratioHeight = req.body?.ratioHeight ? req.body.ratioHeight : "";
      productData.format = req.body?.format ? req.body.format : "";
      productData.colorF = req.body?.colorF ? req.body.colorF : "";
      productData.colorB = req.body?.colorB ? req.body.colorB : "";
      productData.lam = req.body?.lam ? req.body.lam : "";
      productData.biType = req.body?.biType ? req.body.biType : "";
      productData.paperPrice = req.body?.paperPrice ? req.body.paperPrice : "";
      productData.pressPrice = req.body?.pressPrice ? req.body.pressPrice : "";
      productData.lamSqPrice = req.body?.lamSqPrice ? req.body.lamSqPrice : "";

      productData.ctpPrice = req.body?.ctpPrice ? req.body.ctpPrice : "";
      productData.waste = req.body?.waste ? req.body.waste : "";
      productData.abbb = req.body?.abbb ? req.body.abbb : "";

      productData.dieCut = req.body?.dieCut ? req.body.dieCut : "";
      productData.gluding = req.body?.gluding ? req.body.gluding : "";
      productData.plySet = req.body?.plySet ? req.body.plySet : "";
      productData.biPrice = req.body?.biPrice ? req.body.biPrice : "";
      productData.other = req.body?.other ? req.body.other : "";
      productData.cover = req.body?.cover ? req.body.cover : "";
      productData.remark = req.body?.remark ? req.body.remark : "";

      console.log("-------product data", productData);

      const updateProduct = await ProductDbModel.update(productData, {
        where: { id: id as number }
      });

      if (req?.files?.media?.length > 0) {
        const files = req.files;
        const mediaData = [];
        for (let i = 0; i < files?.media?.length; i++) {
          let type = null;
          const url = files?.media[i].path?.split("\\").join("/");
          console.log('file', files?.media[i].originalname);
          const splitUrl = url.split("/");
          if (files.media[i].mimetype.startsWith('image')) {
            type = "photo";
          }
          const filename = files?.media[i].originalname.split(".");
          mediaData.push({
            name: filename[0],
            type,
            url,
            status: "available"
          });
        }
        const media = await MediaDbModel.bulkCreate(mediaData);

        // Ensure updateProduct is a proper instance
        if (updateProduct && id) {
          const updatedProductInstance = await ProductDbModel.findOne({
            where: {
              id
            },
            include: [
              {
                model: MediaDbModel,
                as: "media"
              }
            ]
          }) as any;

          if (updatedProductInstance) {
            const productMediaData = media.map((m: any) => ({
              productId: id,
              mediaId: m.id
            }));
        
            // Insert new associations to ProductMediaDbModel
            await ProductMediaDbModel.bulkCreate(productMediaData);
          }
        }
      }
      return res.json({
        success: true,
        message: 'Product is updated successfully',
        data: updateProduct
      });
    } catch (e: any) {
      console.log('------update product error----', e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  /**
   * delete product.
   * @param req
   * @param res 
   * @returns 
   */
  async deleteProduct(req: any, res: any): Promise<ProductDbModel> {
    try {
      const id = req.params.id;

      const detailProduct = await ProductDbModel.findOne({
        where: {
          id
        }
      }) as any;

      if (!detailProduct) {
        return res.status(400).json({
          message: "Product is not found by this id"
        });
      }

      const removeProductData = await ProductDbModel.destroy(
        {
          where: {
            id
          },
        }
      );

      return res.json({
        success: true,
        message: `Delete Product is successful.`,
        data: removeProductData
      });
    } catch (e: any) {
      console.log("Delete Product API Error", e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  /**
   * get Product by Id.
   * @param product_id 
   * @returns 
   */
  async getProductById(product_id: number, res: any): Promise<any> {
    try {
      const productData = await ProductDbModel.findOne({
        where: {
          id: product_id
        },
        include: [
          {
            model: CategoryDbModel,
            foreignKey: "categoryId",
            as: "category"
          },
          {
            model: MediaDbModel,
            as: 'media',
            required: false
            // order: Sequelize.literal('rand()'), // Order the media records randomly
            // limit: 1, // Limit to only 1 random media record
            // offset: Number(randomMediaOffset) // Use the random media offset
          }
          // {
          //   model: UserDbModel,
          //   through: { attributes: [] },
          //   as: "createdProductUser",
          //   attributes: []
          // }
        ]
      }) as any;
      if (!productData) {
        return res.status(404).json({
          message: "Product data is not found by this id"
        });
      }

      return res.json({
        success: true,
        data: productData
      })
    } catch (e: any) {
      console.log("--Get Product By Id API Error---", e);
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
  async getProductWithCategoryId(category_id: number, res: any): Promise<any> {
    try {
      const productData = await ProductDbModel.findAll({
        where: {
          categoryId: category_id
        },
        include: [
          {
            model: CategoryDbModel,
            foreignKey: "categoryId",
            as: "category"
          },
          {
            model: MediaDbModel,
            as: "media",
          }
        ]
      }) as any;
      if (!productData) {
        return res.status(404).json({
          message: "Product data with category id is not found"
        });
      }

      for (let i = 0; i < productData.length; i++) {
        const mediaData: any = productData[i]?.dataValues?.media;
        for (let j = 0; j < mediaData?.length; j++) {
          mediaData[j].dataValues.image = mediaData[j]?.url;
        }
      }

      return res.json({
        success: true,
        data: productData
      })
    } catch (e: any) {
      console.log("--Get Product By Id API Error---", e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });

    }
  }
}

export const productService = new ProductService();