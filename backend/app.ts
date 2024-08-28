import express from "express";
import cors from "cors";
import { routes } from "./routes/routes.ts";
import { config } from "dotenv";

config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/foods", routes);

app.listen(3000, () => {
    console.log(`Server running at: ${process.env.API_URL}/foods`);
});

