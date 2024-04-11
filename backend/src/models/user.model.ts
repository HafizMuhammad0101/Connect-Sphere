import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        lowercase: true,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    },
    profileImage: {
        type: String,
    },
    accessToken: {
        type: String,
    },
    rememberMe: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);