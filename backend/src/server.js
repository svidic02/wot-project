import express from "express";
import cors from "cors";
import foodRouter from "./routers/food.router.js";

const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use("/api/foods", foodRouter);

app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
