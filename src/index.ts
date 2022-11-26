import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import fileUpload from "express-fileupload";

import rootRouter from "./routes/root-routes";
import commonRouter from "./routes/common-routes";
import userRouter from "./routes/user-routes";
import brandRouter from "./routes/brand-routes";
import countryRouter from "./routes/country-routes";
import categoryRouter from "./routes/category-route";
import {
  errorHandler,
  validationErrorHandler,
} from "./middlewares/error-handlers";

dotenv.config();
const app: Express = express();

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use("/", rootRouter);
app.use("/api/common", commonRouter);
app.use("/api/user", userRouter);
app.use("/api/brand", brandRouter);
app.use("/api/country", countryRouter);
app.use("/api/category", categoryRouter);
app.use(validationErrorHandler);
app.use(errorHandler);

// app.listen(process.env.PORT || 5000, () => {
//   console.log(`App running on Port: ${process.env.PORT || 5000}`);
// });

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.brkgm.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log("Running on Port: 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
