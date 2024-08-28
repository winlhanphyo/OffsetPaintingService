import { FindOptions } from "sequelize";
import { IArticleModel, ArticleDbModel, UserDbModel, ProductDbModel, MediaDbModel } from "../../database";
import { PAGINATION_LIMIT } from "../../utils/constant";
import { deleteFile } from "../../utils/utils";

class ArticleService {
  /**
   * get article list.
   * @param articleAttributes 
   * @param otherFindOptions 
   * @returns 
   */
  async getArticleList(articleAttributes?: Array<any>, otherFindOptions?: FindOptions, res?: any): Promise<any> {
    try {
      let articleList = await ArticleDbModel.findAll({
        ...otherFindOptions,
        attributes: articleAttributes,
        include: [
          {
            model: UserDbModel,
            foreignKey: "createdUserId",
            as: "createdArticleByUser"
          },
          {
            model: UserDbModel,
            foreignKey: "updatedUserId",
            as: "updatedArticleByUser"
          }
        ]
      });
      const articleCount = await ArticleDbModel.count();

      return res.json({
        success: true,
        count: articleCount,
        data: articleList
      });

    } catch (e: any) {
      console.log('------get article list API error----', e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  /**
   * create article data.
   * @param articleObj 
   * @returns 
   */
  async createArticle(req: any, res: any): Promise<ArticleDbModel> {
    try {
      let image: string = req.body.articleImage;
      if (req.files?.articleImage?.length > 0) {
        image = req.files.articleImage[0].path?.split("\\").join("/");
      }

      const articleObj: IArticleModel = {
        name: req.body.name,
        articleImage: image,
        createdUserId: req.headers['userid']
      } as any;

      const createArticle = await ArticleDbModel.create({ ...articleObj, createdAt: new Date().toISOString() });
      return res.json({
        success: true,
        message: 'Article is created successfully',
        data: createArticle
      });
    } catch (e: any) {
      console.log("-----Create Article API error----", e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  /**
   * update Article data.
   * @param req 
   * @param res 
   */
  async updateArticle(req: any, res: any): Promise<any> {
    try {
      const id = +req.params.id;
      const detailArticle = await this.getArticleById(id);

      if (!detailArticle) {
        return res.status(404).send("Article is not found");
      }

      const articleObj: IArticleModel = {
        name: req.body.name,
        description: req.body.description,
        updatedUserId: req.headers['userid'],
        updatedAt: new Date().toISOString()
      } as any;

      let image: any = req.body.articleImage;
      if (req.files?.articleImage?.length > 0) {
        image = req.files.articleImage[0].path?.split("\\").join("/");
        if (detailArticle.image) {
          deleteFile(detailArticle.articleImage);
        }
        if (detailArticle) {
          articleObj.articleImage = image;
        }
      }

      const updateArticleData = await ArticleDbModel.update(articleObj, {
        where: { id: id as number }
      });
      return res.json({
        success: true,
        message: 'Article is updated successfully',
        data: updateArticleData
      });
    } catch (e: any) {
      console.log('------update Article error----', e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

  /**
   * get Article by Id.
   * @param article_id 
   * @returns 
   */
  async getArticleById(article_id: number, res: any = null): Promise<any> {
    try {
      const articleData = await ArticleDbModel.findOne({
        where: {
          id: article_id
        },
        include: [
          {
            model: UserDbModel,
            foreignKey: "createdUserId",
            as: "createdArticleByUser"
          },
          {
            model: UserDbModel,
            foreignKey: "updatedUserId",
            as: "updatedArticleByUser"
          }
        ]
      }) as any;
      console.log('Article Data', articleData);
      if (!articleData) {
        return res.status(404).json({
          success: false,
          message: "Article data is not found by this id"
        });
      }

      if (res) {
        return res.json({
          data: articleData
        })
      } else {
        return articleData;
      }

    } catch (e: any) {
      console.log("--Get Article By Id API Error---", e);
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
   * delete article.
   * @param req
   * @param res 
   * @returns 
   */
  async deleteArticle(req: any, res: any): Promise<ArticleDbModel> {
    try {
      const id = req.params.id;
      const detailArticle = await this.getArticleById(id);
      if (!detailArticle) {
        return res.status(400).json({
          message: "Article is not found by this id"
        });
      }

      const removeArticleData = await ArticleDbModel.destroy(
        {
          where: {
            id
          },
        }
      );

      return res.json({
        success: true,
        message: `Delete Article is successful.`,
        data: removeArticleData
      });
    } catch (e: any) {
      console.log("Delete Article API Error", e);
      return res.status(400).json({
        success: false,
        message: e.toString()
      });
    }
  }

}

export const articleService = new ArticleService();