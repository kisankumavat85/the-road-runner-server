import { Request, Response, NextFunction } from "express";
import fileUpload from "express-fileupload";

import HttpError from "../models/http-errors-model";
import cloudinary from "../configs/cloudinary-config";
import { CloudinaryImageFolder, ImageType } from "../constants/common-constant";

export const uploadImage = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const files = request.files;
  const imageType = request.body.imageType;

  if (!files || !(Object.keys(files).length > 0)) {
    response.send("Please add image");
    return next();
  }

  const file = files?.image as fileUpload.UploadedFile;
  const folderName =
    ImageType.ProfileImage == imageType
      ? CloudinaryImageFolder.ProfileImages
      : CloudinaryImageFolder.ProductImages;

  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      folder: folderName,
    });
    response.send({ url: result.url, secureUrl: result.secure_url });
  } catch (err) {
    const error = new HttpError(500, "Something went wrong");
    return next(error);
  }
};
