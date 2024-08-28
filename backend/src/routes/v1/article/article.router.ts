import { Router } from "../../custom-router";
import { articleController } from "../../../controllers/article";

const router = new Router();

router.get('/', articleController.getAllArticle);
router.post('/', articleController.createArticle);
router.get('/:id', articleController.detailArticle);
router.post('/update/:id', articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

export const articleRouter = router;
