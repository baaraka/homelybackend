import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dishRoute from "./routes/dishs.js";

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

app.use("/api/dishs", dishRoute);

//error handling middleware
app.use((error, req, res, next) => {
  const errorStatus = error.status || 500;
  const errorMessage = error.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: error.stack,
  });
});

app.listen(5800, () => {
  connect();
  console.log("App listening and here we go!");
});
