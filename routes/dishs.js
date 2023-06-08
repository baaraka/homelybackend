import express from "express";
import { createDish } from "../controllers/dish";

const router = express.Router();

//CREATE
router.post("/dish", createDish);

export default router;
