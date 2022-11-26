import express from "express";

import validate from "../configs/ajv-config";
import addressSchema from "../validations/address-schema";
import signinSchema from "../validations/signin-schema";
import signupSchema from "../validations/signup-schema";
import * as controllers from "../controllers/user-controllers";

const router = express.Router();

router.get("/", controllers.getUser);
router.delete("/", controllers.deleteUser);
router.post("/signin", validate({ body: signinSchema }), controllers.signin);
router.post("/signup", validate({ body: signupSchema }), controllers.signup);
router.post(
  "/address",
  validate({ body: addressSchema }),
  controllers.addAddress
);
router.delete("/address", controllers.deleteAddress);

export default router;
