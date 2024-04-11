import { Request, Response } from "express";
import { User } from "../models/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { errorResponse, responseData, response } from "../utils/response";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

export const Signup = asyncHandler(async (req: Request, res: Response) => {

    const { firstName, lastName, email, password, profileImage } = req.body;

    if (!(firstName && lastName && email && password)) {
        return errorResponse(res, "Please fill all the required fields (firstName, lastName, email, password)");
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return errorResponse(res, "User already exists on this email");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ firstName, lastName, email, password: hashPassword })

    const secretKey = process.env.JWT_SECRET;

    const token = Jwt.sign({ id: user._id }, secretKey!, { expiresIn: process.env.EXPIRES_IN });

    const cookieOptions = {
        httpOnly: true,
    }

    res.cookie("token", token, cookieOptions);

    user.accessToken = token;
    user.password = undefined;

    return responseData(res, 200, "User Signed Up Successfully!", user);
});

export const Login = asyncHandler(async (req: Request, res: Response) => {

    const { email, password } = req.body;

    if (!(email && password)) {
        return errorResponse(res, "Please fill all the required fields (email, password)");
    }

    const isUserExist = await User.findOne({ email });

    if (!isUserExist) {
        return errorResponse(res, "Account not found");
    }

    const isMatch = bcrypt.compareSync(password, isUserExist.password!);

    if (isMatch) {
        const accessToken = Jwt.sign({ id: isUserExist._id }, process.env.JWT_SECRET!, { expiresIn: process.env.EXPIRES_IN });

        const cookieOptions = {
            httpOnly: true,
        };

        res.cookie("token", accessToken, cookieOptions);

        isUserExist.password = undefined;
        return res.status(200).json({ success: true, accessToken, data: isUserExist, message: "User logged in Successfully!" });
    } else {
        return errorResponse(res, "Invalid password");
    }
});

export const AddOrRemoveFriend = asyncHandler(async (req: Request, res: Response) => {

    const { person } = req.body;
    const currentUserId = req.user.id;

    if (!person) {
        return errorResponse(res, "Person id is required");
    }

    const currentUser = await User.findById(currentUserId);
    const secondUser = await User.findById(person);

    if (!secondUser) {
        return errorResponse(res, "User not found");
    } else {

        const isFriend = secondUser.friends.includes(currentUserId);
        const isRequestSent = secondUser.receivedRequests.includes(currentUserId);

        if (isFriend) {

            const indexOfSecondUser = currentUser?.friends.indexOf(secondUser.id);
            const indexOfCurrentUser = secondUser.friends.indexOf(currentUserId);

            secondUser.friends.splice(indexOfCurrentUser, 1);
            currentUser!.friends.splice(indexOfSecondUser!, 1);

            await currentUser?.save();
            await secondUser.save();
            return response(res, 200, "User Unfriend Successfully!");

        }
        if (isRequestSent) {

            const indexOfCurrentUser = secondUser.receivedRequests.indexOf(currentUserId);
            const indexOfSecondUser = currentUser?.sentRequests.indexOf(secondUser.id);

            secondUser.receivedRequests.splice(indexOfCurrentUser, 1);
            currentUser!.sentRequests.splice(indexOfSecondUser!, 1);

            await currentUser?.save();
            await secondUser.save();
            return response(res, 200, "Request Unsent Successfully!");

        }
        //sending request here
        secondUser.receivedRequests.push(currentUserId);
        currentUser!.sentRequests.push(secondUser.id);

        await currentUser?.save();
        await secondUser.save();

        return response(res, 200, "Request Sent Successfully!");

    }
});

export const acceptOrRejectFriendRequest = asyncHandler(async (req: Request, res: Response) => {
    let { key, person } = req.body;
    const currentUserId = req.user._id;

    if (!(key && person)) {
        return errorResponse(res, "Both Key and person id is required");
    }

    key = key.toLowerCase();

    const currentUser = await User.findById(currentUserId);
    const secondUser = await User.findById(person);
   
    if (!secondUser) {
        return errorResponse(res, "User not found");
    }

    if (key === "accept") {
        currentUser?.friends.push(secondUser?.id);
        secondUser?.friends.push(currentUser?.id);

        const indexOfSecondUser = currentUser?.receivedRequests.indexOf(secondUser?.id);
        const indexOfCurrentUser = secondUser?.sentRequests.indexOf(currentUser?.id);
        currentUser?.receivedRequests.splice(indexOfSecondUser!, 1);
        secondUser?.sentRequests.splice(indexOfCurrentUser!, 1);
        await currentUser?.save();
        await secondUser?.save();

        return response(res, 200, "Request accepted successfully!");
    }
    if (key === "decline") {

        const indexOfSecondUser = currentUser?.receivedRequests.indexOf(secondUser?.id);
        const indexOfCurrentUser = secondUser?.sentRequests.indexOf(currentUser?.id);
        currentUser?.receivedRequests.splice(indexOfSecondUser!, 1);
        secondUser?.sentRequests.splice(indexOfCurrentUser!, 1);

        await currentUser?.save();
        await secondUser?.save();

        return response(res, 200, "Request declined successfully!");
    }
});