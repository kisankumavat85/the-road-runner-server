import { Request, Response, NextFunction } from "express";

import Category from "../models/category-model";
import HttpError from "../models/http-errors-model";

export const getAllCategories = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let categories;

  try {
    categories = await Category.find({});
  } catch (err) {
    const error = new HttpError(500, "Something went wrong");
    return next(error);
  }

  response.json({ categories });
};

export const createCategory = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // TODO: use token to create brand
  const { name, value } = request.body;

  const newCategory = new Category({ name, value });

  try {
    await newCategory.save();
  } catch (err) {
    const error = new HttpError();
    return next(error);
  }

  response.json({
    countryId: newCategory._id,
    countryName: newCategory.name,
  });
};

export const deleteCategory = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // TODO: use token to delete brand
  const { categoryId } = request.query;

  try {
    await Category.deleteOne({ _id: categoryId });
  } catch (err) {
    const error = new HttpError();
    return next(error);
  }

  response.json({
    message: "Category deleted successfully",
  });
};
