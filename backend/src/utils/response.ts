import { Response } from "express";

export const errorCatchResponse = (res: Response, message: string) => {
    return res.status(500).json({ status: 500, success: false, message });
}

export const errorResponse = (res: Response, message: string) => {
    return res.status(400).json({ status: 400, success: false, message });
}

export const response = (res: Response, statusCode: number, message: string,) => {
    let success: boolean = false;
    if (statusCode === 200 || statusCode === 201) {
        success = true;
    }
    return res.status(statusCode).json({ status: statusCode, success, message });
}

export const responseData = (res: Response, statusCode: number, message: string, payload: any) => {
    return res.status(statusCode).json({ status: statusCode, success: true, message, data: payload });
}