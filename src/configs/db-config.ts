import mongoose from "mongoose";

import { DB_NAME, DB_PASSWORD, DB_USER } from "./env.config";

const MONGO_DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.brkgm.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

export const connectToMongoDB = () => mongoose.connect(MONGO_DB_URI);
