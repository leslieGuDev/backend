import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import searchingRoute from "./routes/searchingRoute.js";
import destinationRoute from "./routes/destinationRoute.js";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
dotenv.config();

const port = process.env.PORT;
const uri = process.env.DATABASE_URL;

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hello there!");
});

app.use("/destinations", destinationRoute);
app.use("/searching", searchingRoute);

mongoose
  .connect(uri)
  .then(() => {
    console.log("App connected to database");
    app.listen(port, () => {
      console.log(`App is listening to port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
