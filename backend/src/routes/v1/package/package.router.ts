import { Router } from "../../custom-router";
import { packageController } from "../../../controllers/package";

const router = new Router();

router.post('/update/:id', packageController.updatePackage);
router.get('/:id', packageController.detailPackage);
router.delete('/:id', packageController.deletePackage);
router.get('/', packageController.getAllPackage);
router.post('/', packageController.createPackage);

// router.post('/:id/support', postController.support);
// router.get('/top/video/:id/random', postController.userRandomTopVideoList);
// router.get('/video/list', postController.userVideoList);
// router.get('/:id/video/like', postController.likeVideo);
// router.get('/:id/video/view', postController.viewVideo);
// router.get('/:id/video/unlike', postController.unLikeVideo);

export const packageRouter = router;
