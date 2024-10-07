import { Router } from "../../custom-router";
import { orderController } from "../../../controllers/order";

const router = new Router();

console.log('---------order router-------');

router.get('/user', orderController.getUserOrder);
router.post('/update/:id', orderController.updateOrder);
router.get('/:id', orderController.detailOrder);
router.delete('/:id', orderController.deleteOrder);
router.get('/', orderController.getAllOrder);
router.post('/', orderController.createOrder);

export const orderRouter = router;
