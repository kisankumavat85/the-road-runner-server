import express from "express";

import validate from "../configs/ajv-config";
import * as controllers from "../controllers/country-controllers";
import countrySchema from "../validations/country-schema";

const router = express.Router();

router.get("/", controllers.getAllCountries);
router.post("/", validate({ body: countrySchema }), controllers.createCountry);
router.delete("/", controllers.deleteCountry);

export default router;
