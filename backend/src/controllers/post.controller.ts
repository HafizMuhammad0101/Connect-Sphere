import { Request, Response } from "express";
import { Post } from "../models/post.model";
import { asyncHandler } from "../utils/asyncHandler";
import { errorResponse, response } from "../utils/response";

export const createPost = asyncHandler(async (req: Request, res: Response) => {

    const { title, image } = req.body;

    if (!(title || image)) {
        return errorResponse(res, "One of them is required (title, image)");
    }

    req.body.author = req.user._id;

    const post = await Post.create(req.body);

    if (post) {
        return response(res, 200, "Post Created Successfully!");
    } else {
        return errorResponse(res, "Error while creating post");
    }

});