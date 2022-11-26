import express from "express";

import validate from "../configs/ajv-config";
import * as controllers from "../controllers/brand-controllers";
import brandSchema from "../validations/brand-schema";

const router = express.Router();

router.get("/", controllers.getAllBrands);
router.post("/", validate({ body: brandSchema }), controllers.createBrand);
router.delete("/", controllers.deleteBrand);

export default router;
