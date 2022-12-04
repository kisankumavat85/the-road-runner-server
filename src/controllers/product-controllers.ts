import { NextFunction, Request, Response } from "express";
import HttpError from "../models/http-errors-model";

import Product from "../models/product-model";

export const getProducts = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { size, pageNumber, query, total } = request.query;

  let newTotal;
  if (total) {
    newTotal = Number(total) || 0;
  } else {
    newTotal = (Number(pageNumber) - 1 || 0) * (Number(size) || 0);
  }

  let products;

  try {
    products = await Product.find({ $text: { $search: String(query) || "" } })
      .skip(newTotal)
      .limit(Number(size) || 0)
      .populate("brand", ["name", "image"])
      .sort({ _id: -1 });
  } catch (err) {
    const error = new HttpError(500);
    next(error);
  }

  if (!products) {
    const error = new HttpError(404, "Products not found");
    next(error);
  }

  response.json(products);
};

export const createProduct = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const body = request.body;
  const {
    brand,
    title,
    subTitle,
    description,
    gender,
    category,
    averageRating,
    variants,
  } = body;
  // console.log("product body", body);

  const newProduct = new Product({
    brand,
    title,
    subTitle,
    description,
    gender,
    category,
    averageRating,
    variants,
  });

  try {
    await newProduct.save();
  } catch (err) {
    console.log("err", err);
    const error = new HttpError(500, "Something went wrong");
    return next(error);
  }

  response.status(201).json({
    id: newProduct._id,
    title: newProduct.title,
  });
};

export const getProductById = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { id } = request.params;

  let product;

  try {
    product = await Product.find({ _id: id }).populate("brand", [
      "name",
      "image",
    ]);
  } catch (err) {
    const error = new HttpError();
    next(error);
  }

  if (!product) {
    const error = new HttpError(404, "Product not found");
    next(error);
  }

  response.json(product);
};

export const updateProduct = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {};

export const deleteProduct = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {};

export const addProductVariant = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {};

export const deleteProductVariant = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {};
