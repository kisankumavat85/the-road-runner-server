import express from "express";

import validate from "../configs/ajv-config";
import imageUploadSchema from "../validations/common-schema";
import * as controllers from "../controllers/common-controllers";

const router = express.Router();

router.post(
  "/upload",
  validate({ body: imageUploadSchema }),
  controllers.uploadImage
);

export default router;
