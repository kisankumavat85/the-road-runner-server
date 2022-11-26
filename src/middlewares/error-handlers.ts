import { ErrorRequestHandler } from "express";
import { ValidationError } from "express-json-validator-middleware";

export const validationErrorHandler: ErrorRequestHandler = (
  error,
  request,
  response,
  next
) => {
  // Check the error is a validation error
  if (error instanceof ValidationError) {
    // Handle the error
    const errors = error.validationErrors.body?.map((i) => i.message);
    response.status(400).send({ errors });
    next();
  } else {
    // Pass error on if not a validation error
    next(error);
  }
};

export const errorHandler: ErrorRequestHandler = (
  error,
  request,
  response,
  next
) => {
  if (response.headersSent) {
    return next(error);
  }
  response.status(error.code || 500).json({
    message: error.message || "An unknown error occured",
    code: error.code || 500,
  });
};
