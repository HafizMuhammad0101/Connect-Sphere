import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);
        console.log(`Connection Successful With MongoDB\nHOST : ${connectionInstance.connection.host}`);
    } catch (error: any) {
        console.log("Database Connection Error: ", error.message);
    }
}

export default connectDB;