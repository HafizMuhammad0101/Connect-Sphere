import { Router } from "express";
import { protect } from "../middlewares/protect.middleware";
import * as postController from "../controllers/post.controller";

export const postRouter: Router = Router();

//PostRoutes
postRouter.post("/create", protect, postController.createPost);