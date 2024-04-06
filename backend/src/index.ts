import app from "./app";
import connectDB from "./config/db";
import dotenv from "dotenv";

dotenv.config();

connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server listening on PORT : ${process.env.PORT}`);
    });
});