import Dish from "../models/Dish.js";

export const createDish = async (req, res, next) => {
  try {
    const newDish = new Dish(req.body);

    await newDish.save();
    res.status(200).json("Dish created successfully");
  } catch (error) {
    next(error);
  }
};

export const getAllDish = async (req, res, next) => {
  try {
    const getDish = await Dish.find();
    res.status(200).json(getDish);
  } catch (error) {
    next(error);
  }
};
