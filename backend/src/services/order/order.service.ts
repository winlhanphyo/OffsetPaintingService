import { FindOptions } from "sequelize";
import path from "path";
import { IOrderModel, MediaDbModel, OrderDbModel, OrderDetailDbModel, ProductDbModel, UserDbModel } from "../../database";
import { deleteFile } from "../../utils/utils";

class OrderService {
  /**
   * get posts list.
   * @param orderAttributes 
   * @param otherFindOptions 
   * @returns 
   */
  async getOrderList(orderAttributes?: Array<any>, otherFindOptions?: FindOptions, offset?: number, limit?: number, userId?: any, res?: any): Promise<any> {
    try {
      limit = limit && limit > 0 ? limit : undefined;
      let orderList = await OrderDbModel.findAll({
        ...otherFindOptions,
        attributes: orderAttributes,
        limit,
        offset
      });

      const orderCount = await OrderDbModel.count();

      return res.json({
        count: orderCount,
        data: orderList,
        offset: offset
      });

    } catch (e: any) {
      console.log('------get order list API error----', e);
      return res.status(400).json({
        message: e.toString()
      });
    }
  }

  /**
   * create order data.
   * @param req 
   * @param res 
   * @returns 
   */
  async createOrderDetail(req: any, res: any) {
    try {
      let filename: string = "";
      if (req.files?.designImage?.length > 0) {
        filename = req.files.designImage[0].path?.split("\\").join("/");
      }

      const orderDetailObj = {
        productId: req.body?.productId,
        amount: req.body?.amount,
        quantity: req.body?.quantity,
        designImage: filename,
        productDetail: req.body?.productDetail,
        userId: req.body.customer
      };
      const response = await OrderDetailDbModel.create({ ...orderDetailObj, createdAt: new Date().toISOString() });

      return res.json({
        success: true,
        message: 'Order Detail is created successfully',
        data: response
      });

    } catch (e: any) {
      console.log("-----Create Order Detail API error----", e);
      return res.status(400).json({
        message: e.toString()
      });
    }
  }

  /**
   * order create data.
   * @param req 
   * @param orderDetailData 
   * @returns 
   */
  async orderCreateData(req: any, res: any): Promise<any> {
    try {
      const orderDetailIds = req.body.orderDetailIds;

      const orderObj: any = {
        customer: req.body.customer,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phone: req.body.phone,
        status: req.body.status,
        totalAmount: req.body.totalAmount,
        orderDetailId: JSON.stringify(orderDetailIds),
        orderInstruction: req.body.orderInstruction,
        shippingMethod: req.body.shippingMethod
      } as any;

      req.body?.paymentScreenshot ? orderObj.paymentScreenshot = req.body?.paymentScreenshot : "";
      orderObj.paymentDone = req.body?.paymentDone ? orderObj.paymentDone : false;

      const createOrder = await OrderDbModel.create({ ...orderObj, createdAt: new Date().toISOString() });

      const orderDetailObj: any = {};
      orderDetailObj.orderId = createOrder?.dataValues?.id;

      const updateOrderDetailData = await OrderDetailDbModel.update(orderDetailObj, {
        where: { id: orderDetailIds }
      });
      console.log("-------update order detail data");
      // orderData.orderDetail = orderDetailIds;
      // const result = await Order.insertMany(orderData);
      return res.json({
        success: true,
        message: 'Order is created successfully',
        data: createOrder
      });
    } catch (e: any) {
      console.log("-----Create Order API error----", e);
      return res.status(400).json({
        message: e.toString()
      });
    }
  }

  /**
   * delete file data.
   * @param data 
   * @param dataPath 
   */
  deleteFileData = (data: any, dataPath: string) => {
    if (data) {
      const rootDir = path.join(__dirname, "../../" + dataPath);
      const filePath = path.join(rootDir, data);
      deleteFile(filePath);
    }
  }

  /**
   * update Order data.
   * @param req 
   * @param res 
   */
   async changeStatus(req: any, res: any): Promise<any> {
    try {
      const id = +req.params.id;
      const detailOrder = await orderService.getOrderById(id);

      if (!detailOrder) {
        return res.status(404).send("Order is not found");
      }

      const orderObj: any = {} as any;
      orderObj.status = req.body?.status ? req.body.status : false;

      orderObj.id = +req.params.id;

      const updateOrderData = await OrderDbModel.update(orderObj, {
        where: { id: orderObj.id as number }
      });

      return res.json({
        message: 'Order status is updated successfully',
        data: updateOrderData
      });
    } catch (e: any) {
      console.log('------update order status error----', e);
      return res.status(400).json({
        message: e.toString()
      });
    }
  }

  /**
   * update Order data.
   * @param req 
   * @param res 
   */
  async updateOrder(req: any, res: any): Promise<any> {
    try {
      const id = +req.params.id;
      const detailOrder = await orderService.getOrderById(id);

      if (!detailOrder) {
        return res.status(404).send("Order is not found");
      }

      const orderObj: any = {
        customer: req.headers['userid'],
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        phone: req.body.phone,
        status: req.body.status,
        totalAmount: req.body.totalAmount,
        orderInstruction: req.body?.orderInstruction,
        shippingMethod: req.body?.shippingMethod
      } as any;

      req.body?.paymentScreenshot ? orderObj.paymentScreenshot = req.body?.paymentScreenshot : "";
      orderObj.paymentDone = req.body?.paymentDone ? orderObj.paymentDone : false;

      orderObj.id = +req.params.id;

      const updateOrderData = await OrderDbModel.update(orderObj, {
        where: { id: orderObj.id as number }
      });

      return res.json({
        message: 'Order is updated successfully',
        data: updateOrderData
      });
    } catch (e: any) {
      console.log('------update order error----', e);
      return res.status(400).json({
        message: e.toString()
      });
    }
  }

  /**
   * update Order data.
   * @param req 
   * @param res 
   */
  async paymentOrder(req: any, res: any): Promise<any> {
    try {
      const id = +req.params.id;
      const detailOrder = await orderService.getOrderById(id);

      if (!detailOrder) {
        return res.status(404).send("Order is not found");
      }

      const orderObj: any = {} as any;

      req.body?.paymentScreenshot ? orderObj.paymentScreenshot = req.body?.paymentScreenshot : "";
      orderObj.paymentDone = true;

      orderObj.id = +req.params.id;

      const updateOrderData = await OrderDbModel.update(orderObj, {
        where: { id: orderObj.id as number }
      });

      return res.json({
        message: 'Payment is done successfully',
        data: updateOrderData
      });
    } catch (e: any) {
      console.log('------payment API error----', e);
      return res.status(400).json({
        message: e.toString()
      });
    }
  }

  /**
   * get Order by Id.
   * @param order_id 
   * @returns 
   */
  async getOrderById(order_id: number, res: any = null): Promise<any> {
    try {
      const orderData = await OrderDbModel.findOne({
        where: {
          id: order_id
        },
        include: [
          {
            model: UserDbModel,
            foreignKey: "customer",
            as: "customerData"
          }
        ]
      }) as any;

      if (!orderData) {
        return res.status(404).json({
          message: "Order data is not found by this id"
        });
      }

      const orderDetailId = orderData?.dataValues?.orderDetailId || [];
      const orderDetail = await OrderDetailDbModel.findAll({
        where: { id: orderDetailId },
        // include: [
        //   {
        //     model: MediaDbModel,
        //     foreignKey: "id",
        //     as: "mediaData"
        //   }
        // ]
      });

      // for (let i = 0; i < orderDetail.length; i++) {
      //   let mediaList = orderDetail[i]?.dataValues;
      //   if (mediaList?.mediaData?.dataValues?.type === "video") {
      //     mediaList.mediaData.dataValues.cover = "upload/user/video/default.jpg";
      //   } else if (mediaList?.mediaData?.dataValues?.type === "music") {
      //     mediaList.mediaData.dataValues.cover = "upload/user/music/default.jpg";
      //   } else if (mediaList?.mediaData?.dataValues?.type === "text") {
      //     mediaList.mediaData.dataValues.cover = "upload/user/text/default.jpg";
      //   } else if (mediaList?.mediaData?.dataValues?.type === "photo") {
      //     mediaList.mediaData.dataValues.cover = mediaList?.mediaData?.dataValues.url;
      //   }
      // }

      if (orderDetail) {
        orderData.dataValues.orderDetail = orderDetail;
      }

      if (res) {
        return res.json({
          data: orderData
        })
      } else {
        return orderData;
      }

    } catch (e: any) {
      console.log("--Get Order By Id API Error---", e);
      if (res) {
        return res.status(400).json({
          message: e.toString()
        });
      } else {
        return null;
      }
    }
  }

  /**
   * get user order data with userId.
   * @param req 
   * @param res 
   */
  async getUserOrder(orderAttributes?: Array<any>, otherFindOptions?: FindOptions, offset?: number, limit?: number, res?: any): Promise<any> {
    try {
      limit = limit && limit > 0 ? limit : undefined;
      let orderList = await OrderDetailDbModel.findAll({
        ...otherFindOptions,
        attributes: orderAttributes,
        limit,
        offset,
        include: [
          {
            model: OrderDbModel,
            foreignKey: 'orderId',
            as: 'orderData'
          },
          {
            model: ProductDbModel,
            foreignKey: 'productId',
            as: 'productData',
          },
          {
            model: UserDbModel,
            foreignKey: 'userId',
            as: 'userData',
          }
        ]
      });

      const orderCount = await OrderDetailDbModel.count();

      return res.json({
        count: orderCount,
        data: orderList,
        offset: offset
      });

    } catch (err: any) {
      console.log("Get User Order API Error", err);
      return res.status(400).json({
        message: err.toString()
      });
    }
  }

  /**
   * delete order.
   * @param req
   * @param res 
   * @returns 
   */
  async deleteOrder(req: any, res: any): Promise<OrderDbModel> {
    try {
      const id = req.params.id;
      const detailOrder = await this.getOrderById(id);
      if (!detailOrder) {
        return res.status(400).json({
          message: "Order is not found by this id"
        });
      }

      const removeOrderData = await OrderDbModel.destroy(
        {
          where: {
            id
          },
        }
      );

      return res.json({
        message: `Delete Order is successful.`,
        data: removeOrderData
      });
    } catch (e: any) {
      console.log("Delete Order API Error", e);
      return res.status(400).json({
        message: e.toString()
      });
    }
  }

  /**
   * support the post.
   * @param req 
   * @param res 
   */
  async support(req: any, res: any): Promise<any> {
    try {
      const param = req.body;
      const userId = req.headers['userid'];
      const id = +req.params.id;
      let mediaList = [
        {
          price_data: {
            currency: "EUR",
            product_data: {
              donatorId: userId,
              postId: id
            },
            unit_amount: param.amount,
          },
          // quantity: 1,
        }
      ];
      // const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
      // const domainUrl = param.domainUrl;
      // delete param?.domainUrl;

      // const domainUrl = orderData.domainUrl;
      // delete orderData?.domainUrl;
      const dist: any = {
        donatorId: Number(userId),
        postId: id,
        message: param.message,
        amount: param.amount,
        paymentDone: true
      };

      console.log('---------dist', dist);

      // const result = await this.paymentCreate(dist);
      // console.log('order result', result.dataValues.id);

      // const session = await stripe.checkout.sessions.create({
      //   payment_method_types: ["card"],
      //   line_items: mediaList,
      //   mode: "payment",
      //   payment_intent_data: {
      //     metadata: {
      //       paymentId: param.paymentId,
      //     },
      //   },
      //   // shipping_address_collection: {
      //   //   allowed_countries: ['US', 'SG', "IT"],
      //   // },
      //   // custom_text: {
      //   //   shipping_address: {
      //   //     message: 'Please note that we can\'t guarantee 2-day delivery for PO boxes at this time.',
      //   //   },
      //   //   submit: {
      //   //     message: 'We\'ll email you instructions on how to get started.',
      //   //   },
      //   // },
      //   // success_url: domainUrl + "/payment/success",
      //   // cancel_url: domainUrl + "/payment/cancel",
      // });
      // return res.json({ id: session.id });
      return res.json({ msg: "Payment success" });

      // res.json(session);

    } catch (err: any) {
      console.log('Stripe API Error', err);
      throw err.toString();
    }
  }

  /**
   * success payment.
   * @param orderId
   * @returns 
   */
  async successPayment(orderId: any): Promise<any> {
    try {
      const order = await OrderDbModel.findOne(
        {
          where: {
            id: orderId
          }
        });
      if (!order) {
        const error: any = new Error("Not Found!");
        error.statusCode = 404;
        throw error;
      }

      const orderData = {
        paymentDone: true
      } as any;

      const updateOrder = await OrderDbModel.update(orderData, {
        where: { id: orderId as number }
      });

      return {
        message: "Order payment successful!"
      };
    } catch (err: any) {
      console.log('success Payment function failed', err);
      return {
        message: "Payment API Error!" + err.toString(),
      };
    }
  }

}

export const orderService = new OrderService();