import express from "express";

import * as controllers from "../controllers/product-controllers";

const router = express.Router();

router.get("/", controllers.getProducts);
router.post("/", controllers.createProduct);
router.get("/:id", controllers.getProductById);
router.patch("/:id", controllers.updateProduct);
router.delete("/:id", controllers.deleteProduct);
router.post("/variant", controllers.addProductVariant);
router.delete("/variant/:id", controllers.deleteProductVariant);

export default router;
