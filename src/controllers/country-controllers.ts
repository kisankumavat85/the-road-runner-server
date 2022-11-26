import { Request, Response, NextFunction } from "express";

import Country from "../models/country-model";
import HttpError from "../models/http-errors-model";

export const getAllCountries = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let countries;

  try {
    countries = await Country.find({});
  } catch (err) {
    const error = new HttpError(500, "Something went wrong");
    return next(error);
  }

  response.json({ countries: countries });
};

export const createCountry = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // TODO: use token to create brand
  const { name, code, value } = request.body;
  console.log(name, code, value);

  const newCountry = new Country({ name, code, value });

  try {
    await newCountry.save();
  } catch (err) {
    const error = new HttpError();
    return next(error);
  }

  response.json({
    countryId: newCountry._id,
    countryName: newCountry.name,
  });
};

export const deleteCountry = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // TODO: use token to delete brand
  const { countryId } = request.query;

  try {
    await Country.deleteOne({ _id: countryId });
  } catch (err) {
    const error = new HttpError();
    return next(error);
  }

  response.json({
    message: "Country deleted successfully",
  });
};
