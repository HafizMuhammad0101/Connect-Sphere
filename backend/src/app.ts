import { Express, urlencoded } from "express";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app: Express = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static("public"));

export default app;