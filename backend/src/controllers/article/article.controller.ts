import { Response, Request } from 'express';
import autobind from 'autobind-decorator';
import { articleService } from '../../services/article';
import { ArticleDbModel } from '../../database';
import { PAGINATION_LIMIT } from '../../utils/constant';
import { Op } from 'sequelize';

@autobind
class ArticleController {

  /**
   * get all article data.
   * @param req 
   * @param res 
   * @returns 
   */
  async getAllArticle(req: Request, res: Response) {
    const name = req.query.name;
    let otherFindOptions = {};
    
    if (name) {
      otherFindOptions = {
        where: {
          name: {
            [Op.like]: `%${name}%`
          }
        }
      };
    }
    const response = await articleService.getArticleList(undefined, otherFindOptions, res);
    return response;
  }

  /**
   * get all article with product data.
   * @param req 
   * @param res 
   */
  async getAllArticleProduct(req: Request, res: Response) {
    let otherFindOptions = {};
    const response = await articleService.getArticleList(undefined, otherFindOptions, res);
    return response;
  }

  /**
   * create Article.
   * @param req 
   * @param res 
   */
  async createArticle(req: Request, res: Response) {
    const result = await articleService.createArticle(req, res);
    return result;
  }

  /**
   * update Article.
   * @param req 
   * @param res 
   * @returns 
   */
  async updateArticle(req: Request, res: Response) {
    const updateArticleData = await articleService.updateArticle(req, res);
    return updateArticleData;
  }

  /**
   * article Detail
   * @param req 
   * @param res 
   */
  async detailArticle(req: Request, res: Response) {
    const id = +req.params.id;
    const articleData = await articleService.getArticleById(id, res);
    return articleData;
  }

  /**
   * delete article video.
   * @param req 
   * @param res 
   */
  deleteArticle(req: any, res: any) {
    const data = articleService.deleteArticle(req, res);
    return data;
  }

}

export const articleController = new ArticleController();