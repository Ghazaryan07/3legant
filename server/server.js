import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv/config";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Constants
const PORT = process.env.PORT || 7777;
const DB_USER = process.env.DB_USER;
const DB_NAME = process.env.DB_NAME;
const DB_PASSWORD = process.env.DB_PASSWORD;

mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@3legantcluster.zbu5ifj.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=3legantcluster`
  )
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`Server running on port ${PORT}!`);
    });
    console.log("Database succesfully connected!");
  })
  .catch((err) => {
    console.log(err);
  });
