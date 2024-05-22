import { Router } from "../../custom-router";
import { bannerController } from "../../../controllers/banner";

const router = new Router();

router.get('/:id', bannerController.detailBanner);
router.post('/update/:id', bannerController.changeBanner);
router.post('/', bannerController.createBanner);
router.get('/', bannerController.getAllBanner);

export const bannerRouter = router;
