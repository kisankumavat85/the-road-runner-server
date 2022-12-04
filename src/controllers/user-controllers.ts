import { NextFunction, Request, Response } from "express";

import HttpError from "../models/http-errors-model";
import User from "../models/user-model";

export const signin = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { email, password } = request.body;

  let user;

  try {
    user = await User.findOne({ email });
  } catch (err) {
    const error = new HttpError(500, "Something went wrong");
    return next(error);
  }

  if (!user || user?.password !== password) {
    const error = new HttpError(401, "Invalid Credentials");
    return next(error);
  }

  response.json({
    id: user.id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    dob: user.dob,
    gender: user.gender,
  });
};

export const signup = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { firstName, lastName, email, password, gender, dob, profileImageUrl } =
    request.body;

  let existingUser;

  try {
    existingUser = await User.exists({ email: email });
  } catch (err) {
    const error = new HttpError(500, "DB: Something went wrong");
    return next(error);
  }

  console.log("existingUser", existingUser);

  if (existingUser) {
    const error = new HttpError(409, "Email Id already exists");
    return next(error);
  }

  const createdUser = new User({
    firstName,
    lastName,
    email,
    password,
    gender,
    dob,
    profileImageUrl,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError(500, "Something went wrong");
    return next(error);
  }

  response.status(201).json({
    id: createdUser.id,
    email: createdUser.email,
    firstName: createdUser.firstName,
    lastName: createdUser.lastName,
    dob: createdUser.dob,
    gender: createdUser.gender,
    profileImageUrl: createdUser.profileImageUrl,
  });

  // response.send("Login");
};

export const getUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // TODO: use token for userId
  const { userId } = request.query;

  let user;

  try {
    user = await User.findOne({ _id: userId }, "-password");
  } catch (err) {
    const error = new HttpError();
    return next(error);
  }

  if (!user) {
    const error = new HttpError(404, "User not found for given userId");
    return next(error);
  }

  response.json({
    user: user,
  });
};

export const deleteUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // TODO: use token for userId
  const { userId } = request.query;

  try {
    await User.deleteOne({ _id: userId });
  } catch (err) {
    const error = new HttpError();
    return next(error);
  }

  response.json({
    message: "User deleted successfully",
  });
};

export const addAddress = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // TODO: Remove userId after token implementation
  const {
    type,
    userId,
    street1,
    street2,
    city,
    state,
    PIN,
    country,
    isDefaultAddress,
  } = request.body;

  try {
    if (type === "home") {
      await User.updateOne(
        { _id: userId },
        {
          $set: {
            "address.home": {
              street1,
              street2: street2 || "",
              city,
              state,
              PIN,
              country,
              isDefaultAddress: isDefaultAddress || false,
            },
          },
        }
      );
    }
    if (type === "work") {
      await User.updateOne(
        { _id: userId },
        {
          $set: {
            "address.work": {
              street1,
              street2: street2 || "",
              city,
              state,
              PIN,
              country,
              isDefaultAddress: isDefaultAddress || false,
            },
          },
        }
      );
    }
    if (type === "other") {
      await User.updateOne(
        { _id: userId },
        {
          $set: {
            "address.other": {
              street1,
              street2: street2 || "",
              city,
              state,
              PIN,
              country,
              isDefaultAddress: isDefaultAddress || false,
            },
          },
        }
      );
    }
  } catch (err) {
    const error = new HttpError(500, "Something went wrong");
    return next(error);
  }

  response.json({ message: "Address added" });
};

export const deleteAddress = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  // TODO: Remove userId after token implementation
  const { type, userId } = request.query;
  console.log("params", request.query);

  try {
    if (type === "home") {
      await User.updateOne(
        { _id: userId },
        {
          $set: {
            "address.home": null,
          },
        }
      );
    } else if (type === "work") {
      await User.updateOne(
        { _id: userId },
        {
          $set: {
            "address.work": null,
          },
        }
      );
    } else if (type === "other") {
      await User.updateOne(
        { _id: userId },
        {
          $set: {
            "address.other": null,
          },
        }
      );
    } else {
      const error = new HttpError(404, "Enter valid address type");
      return next(error);
    }
  } catch (err) {
    const error = new HttpError(500, "Something went wrong");
    return next(error);
  }

  response.json({ message: "Address deleted" });
};
