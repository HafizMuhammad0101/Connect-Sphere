import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    author: {
        type: String,
    },
    title: {
        type: String,
    },
    image: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    likedBy: [String],
}, { timestamps: true });

export const Post = mongoose.model("Post", postSchema);