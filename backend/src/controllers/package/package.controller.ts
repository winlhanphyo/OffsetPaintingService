import { Response, Request } from 'express';
import autobind from 'autobind-decorator';
import { packageService } from '../../services/package';
import { PAGINATION_LIMIT } from '../../utils/constant';
import { Op } from 'sequelize';

@autobind
class PackageController {
  /**
   * get all products data.
   * @param req 
   * @param res 
   * @returns 
   */
  async getAllPackage(req: Request, res: Response) {
    let offset = Number(req.query.page) - 1 || 0;
    const size = Number(req.query.size) || PAGINATION_LIMIT;
    const name = req.query.name;
    const status = req.query.status;
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

      // otherFindOptions = {
      //   where: {
      //     [Op.or]: [
      //       {
      //         name: {
      //           [Op.like]: `%${name}%`
      //         }
      //       },
      //       {
      //         '$media.name$': {
      //           [Op.like]: `%${name}%`
      //         }
      //       }
      //     ]
      //   }
      // };
    }

    const response = await packageService.getPackageList(undefined, otherFindOptions, page, size, res, status);
    return response;
  }

  /**
   * create product.
   * @param req 
   * @param res 
   */
  async createPackage(req: Request, res: Response) {
    const result = await packageService.createPackage(req, res);
    return result;
  }

  // /**
  //  * get top product.
  //  * @param req 
  //  * @param res 
  //  * @returns 
  //  */
  // async getTopProduct(req: Request, res: Response) {
  //   const result = await packageService.getTopProduct(req, res);
  //   return result;
  // }

  /**
   * update package.
   * @param req 
   * @param res 
   * @returns 
   */
  async updatePackage(req: Request, res: Response) {
    const id = +req.params.id;
    const checkProduct = await packageService.getPackageById(id, res);

    if (!checkProduct) {
      return res.status(404).send("Product is not found");
    }
    const updatePackageData = await packageService.updatePackage(req, res);
    return updatePackageData;
  }

  /**
    * delete package.
    * @param req 
    * @param res 
    */
  deletePackage(req: any, res: any) {
    const data = packageService.deletePackage(req, res);
    return data;
  }

  /**
   * package detail.
   * @param req 
   * @param res 
   */
  async detailPackage(req: Request, res: Response) {
    const id = +req.params.id;
    const data = await packageService.getPackageById(id, res);
    return data;
  }

  // /**
  //  * get product with category id.
  //  * @param req 
  //  * @param res 
  //  * @returns 
  //  */
  // async getProductWithCategoryId(req: Request, res: Response) {
  //   const id = +req.params.id;
  //   const productData = await packageService.getProductWithCategoryId(id, res);
  //   return productData;
  // }
}

export const packageController = new PackageController();