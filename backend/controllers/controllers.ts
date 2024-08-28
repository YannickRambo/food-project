import { Request, Response } from "express";
import { createFood, getFoods } from "../database/database.ts";
import { Food } from "../types/Food.ts";

export async function createNewFood(request: Request, response: Response) {
    const { name, price, description, image } = request.body;

    if (!name || !price || !description || !image) {
        return response.status(400).json({ error: "You must fill the input fields" })
    };

    try {
        const result = await createFood(name, price, description, image);

        if (!result) {
            return response.status(400).json({ error: "Food couldn't be created" });
        };

        return response.status(201).json({ message: "Food successfully created" });
    } catch (error) {
        return response.status(500).json({ error: "Internal server error" });
    }
}



export async function getAllFoods(request: Request, response: Response) {
    try {
        const foods: Food[] = await getFoods();

        if (foods.length == 0) {
            return response.status(200).json({ message: "Foods not found", foods });
        }

        return response.json({ message: "Success", foods });
    } catch (error) {
        return response.status(500).json({ error: "Internal server error" });
    }
}