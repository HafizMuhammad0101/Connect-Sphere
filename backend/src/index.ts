import { Request, Response } from "express";
import app from "./app";
import connectDB from "./config/db";
import dotenv from "dotenv";
import { userRouter } from "./routes/user.routes";

dotenv.config();

//routes
app.use("/api/v1/user", userRouter);

app.get("/", (req: Request, res: Response) => {
    res.json({ message: "App is running" })
});

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server listening on PORT : ${process.env.PORT}`);
    });
});