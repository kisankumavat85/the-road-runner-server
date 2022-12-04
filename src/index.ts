import express, { Express } from "express";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";
dotenv.config();

import rootRouter from "./routes/root-routes";
import commonRouter from "./routes/common-routes";
import userRouter from "./routes/user-routes";
import productRouter from "./routes/product-routes";
import brandRouter from "./routes/brand-routes";
import countryRouter from "./routes/country-routes";
import categoryRouter from "./routes/category-route";
import {
  errorHandler,
  validationErrorHandler,
} from "./middlewares/error-handlers";
import { connectToMongoDB } from "./configs/db-config";
import { PORT } from "./configs/env.config";

const app: Express = express();

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use("/", rootRouter);
app.use("/api/common", commonRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/brand", brandRouter);
app.use("/api/country", countryRouter);
app.use("/api/category", categoryRouter);
app.use(validationErrorHandler);
app.use(errorHandler);

connectToMongoDB()
  .then(() => {
    app.listen(PORT || 5000, () => {
      console.log("Running on Port: 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
