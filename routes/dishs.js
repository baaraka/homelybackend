import express from "express";
import { createDish, getAllDish } from "../controllers/dish.js";

const router = express.Router();

//CREATE
router.post("/dish", createDish);

//GET ALL DISH
router.get("/", getAllDish);

export default router;
