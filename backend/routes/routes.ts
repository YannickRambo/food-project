import express from "express";
import { createNewFood, getAllFoods } from "../controllers/controllers";

export const routes = express.Router();

routes.get("/", getAllFoods);
routes.post("/", createNewFood);