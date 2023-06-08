import Dish from "../models/Dish";

export const createDish = async (req, res, next) => {
  try {
    const newDish = new Dish(req.body);

    await newDish.save();
    res.status(200).json("Dish created successfully");
  } catch (error) {
    next(error);
  }
};
