import Jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler";
import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils/response";
import { User } from "../models/user.model";

declare global {
    namespace Express {
        interface Request {
            user?: any
        }
    }
}

interface Verification {
    id: string,
    iat: number,
    exp: number
}

export const protect = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    try {

        const token = req.cookies.token;

        if (!token) {
            return errorResponse(res, "Unauthorized access, please login");
        }

        const { id }: Verification = Jwt.verify(token, process.env.JWT_SECRET!) as Verification;

        if (!id) {
            return errorResponse(res, "Invalid Token");
        }

        const user = await User.findById(id);

        if (!user) {
            return errorResponse(res, "User not found");
        }
        req.user = user;
        next();
    } catch (error: any) {
        return errorResponse(res, error.message);
    }
});