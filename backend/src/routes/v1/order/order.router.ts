import { Router } from "../../custom-router";
import { orderController } from "../../../controllers/order";

const router = new Router();

console.log('---------order router-------');

router.get('/user/:id', orderController.getUserOrder);
router.post('/update/status/:id', orderController.changeStatus);
router.post('/update/:id', orderController.updateOrder);
router.post('/payment/:id', orderController.paymentOrder);
router.post('/detail', orderController.createOrderDetail);
router.get('/:id', orderController.detailOrder);
router.delete('/:id', orderController.deleteOrder);
router.get('/', orderController.getAllOrder);
router.post('/', orderController.createOrder);

export const orderRouter = router;
