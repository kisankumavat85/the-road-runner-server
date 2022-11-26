import { NextFunction, Request, Response } from "express";

export const getProducts = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {};

export const createProduct = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {};

export const getProductById = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {};

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
