import express from "express";

import validate from "../configs/ajv-config";
import * as controller from "../controllers/category-controller";
import categorySchema from "../validations/category-schema";

const router = express.Router();

router.get("/", controller.getAllCategories);
router.post("/", validate({ body: categorySchema }), controller.createCategory);
router.delete("/", controller.deleteCategory);

export default router;
