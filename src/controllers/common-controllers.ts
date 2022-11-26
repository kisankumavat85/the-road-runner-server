import { Request, Response, NextFunction } from "express";
import fileUpload from "express-fileupload";
import cloudinary from "../configs/cloudinary-config";

// import Category from "../models/category-model";
// import HttpError from "../models/http-errors-model";
export const uploadImage = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const files = request.files;
  if (!files || !(Object.keys(files).length > 0)) {
    response.send("Please add image");
    return next();
  }
  const file = files?.profileImage as fileUpload.UploadedFile;
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath);
    console.log("result", result);
    response.send("image sent");
  } catch (error) {
    console.log(error);
  }
};
