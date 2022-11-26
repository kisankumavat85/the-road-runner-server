import { Request, Response, NextFunction } from "express";

import Brand from "../models/brand-model";
import HttpError from "../models/http-errors-model";

export const getAllBrands = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let brands;

  try {
    brands = await Brand.find({});
  } catch (err) {
    const error = new HttpError(500, "Something went wrong");
    return next(error);
  }

  response.json({ brands: brands });
};

export const createBrand = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // TODO: use token to create brand
  const { name, image, description } = request.body;

  const newBrand = new Brand({ name, image, description });

  try {
    await newBrand.save();
  } catch (err) {
    const error = new HttpError();
    return next(error);
  }

  response.json({
    brandId: newBrand._id,
    brandName: newBrand.name,
  });
};

export const deleteBrand = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // TODO: use token to delete brand
  const { brandId } = request.query;

  try {
    await Brand.deleteOne({ _id: brandId });
  } catch (err) {
    const error = new HttpError();
    return next(error);
  }

  response.json({
    message: "Brand deleted successfully",
  });
};
