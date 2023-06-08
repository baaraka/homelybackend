import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
  img: String,
  name: String,
  price: Number,
  status: String,
});

export default mongoose.model("Dish", dishSchema);
