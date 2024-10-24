import dotenv from "dotenv";
dotenv.config();
import { dbconnect } from "./config/database.config.js";

dbconnect();

import express from "express";
import cors from "cors";

import foodRouter from "./routers/food.router.js";
import userRouter from "./routers/user.router.js";
import orderRouter from "./routers/order.router.js";

const app = express();
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/api/foods", foodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Listening on port " + PORT);
});
