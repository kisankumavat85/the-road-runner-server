import express from "express";

const router = express.Router();
import * as controllers from "../controllers/common-controllers";

router.post("/upload", controllers.uploadImage);

export default router;
