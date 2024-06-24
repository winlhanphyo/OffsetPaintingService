import { Response, Request } from 'express';
import autobind from 'autobind-decorator';
import { bannerService } from '../../services/banner';
import { PAGINATION_LIMIT } from '../../utils/constant';
import { Op } from 'sequelize';

@autobind
class BannerController {

  /**
   * get all banner data.
   * @param req 
   * @param res 
   * @returns 
   */
  async getAllBanner(req: Request, res: Response) {
    let offset = Number(req.query.page) - 1 || 0;
    const size = Number(req.query.size) || PAGINATION_LIMIT;
    const name = req.query.name;
    let page = offset * size;
    let otherFindOptions = undefined;

    if (name) {
      otherFindOptions = {
        where: {
          name: {
            [Op.like]: `%${name}%`
          }
        }
      };
    }
    const response = await bannerService.getBannerList(undefined, otherFindOptions, page, size, res);
    return response;
  }

  /**
   * create banner.
   * @param req 
   * @param res 
   * @returns 
   */
  async createBanner(req: Request, res: Response) {
    const result = await bannerService.createBanner(req, res);
    return result;
  }

  /**
   * banner detail.
   * @param req 
   * @param res 
   */
  async detailBanner(req: Request, res: Response) {
    const id = +req.params.id;
    const bannerData = await bannerService.getBannerById(id, res);
    return bannerData;
  }

  /**
   * change banner with banner id.
   * @param req 
   * @param res 
   * @returns 
   */
  async changeBanner(req: any, res: any) {
    const data = bannerService.changeBanner(req, res);
    return data;
  }

  /**
   * delete banner.
   * @param req 
   * @param res 
   */
    deleteBanner(req: any, res: any) {
      const data = bannerService.deleteBanner(req, res);
      return data;
    }

}

export const bannerController = new BannerController();