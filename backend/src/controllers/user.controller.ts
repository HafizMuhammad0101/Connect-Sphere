import { Request, Response } from "express";
import { User } from "../models/user.model";
import { asyncHandler } from "../utils/asyncHandler";
import { errorResponse, responseData } from "../utils/response";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

export const Signup = asyncHandler(async (req: Request, res: Response) => {

    const { firstName, lastName, email, password, profileImage } = req.body;

    if (!(firstName || lastName || email || password)) {
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
