import mysql, { ResultSetHeader, RowDataPacket } from "mysql2";
import { config } from "dotenv";

config();

const database = mysql.createPool({
    host: process.env.HOST,
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
}).promise();

export async function createFood(name: string, price: number, description: string, image: string) {
    try {
        const [response] = await database.query<ResultSetHeader>("INSERT INTO foods (name, price, description, image) VALUES (?,?,?,?)", [name, price, description, image]);
        return response.affectedRows;
    } catch (error) {
        return error;
    }
}

export async function getFoods() {
    try {
        const [response] = await database.query<RowDataPacket[]>("SELECT * FROM foods");
        return response;
    } catch (error) {
        return error;
    }
}

