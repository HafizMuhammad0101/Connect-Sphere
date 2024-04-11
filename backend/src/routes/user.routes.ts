import express, { Router } from "express";
import * as userController from "../controllers/user.controller";
import { protect } from "../middlewares/protect.middleware";

export const userRouter: Router = express.Router();

//userRoutes
userRouter.post("/signup", userController.Signup);
userRouter.post("/login", userController.Login);
userRouter.post("/friend/addOrRemove", protect, userController.AddOrRemoveFriend);
userRouter.post("/friend/acceptOrRejectRequest", protect, userController.acceptOrRejectFriendRequest);