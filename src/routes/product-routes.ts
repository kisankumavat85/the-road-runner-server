import express from "express";

import validate from "../configs/ajv-config";
import * as controllers from "../controllers/product-controllers";
import { createProductSchema } from "../validations/product-schema";

const router = express.Router();

router.get("/", controllers.getProducts);
router.post(
  "/",
  validate({ body: createProductSchema }),
  controllers.createProduct
);
router.get("/:id", controllers.getProductById);
router.patch("/:id", controllers.updateProduct);
router.delete("/:id", controllers.deleteProduct);
router.post("/variant", controllers.addProductVariant);
router.delete("/variant/:id", controllers.deleteProductVariant);

export default router;
