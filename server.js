import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

//mongodb connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    throw error;
  }
};

//middleware
app.use(express.json());

app.listen(5800, () => {
  connect();
  console.log("App listening and here we go!");
});
