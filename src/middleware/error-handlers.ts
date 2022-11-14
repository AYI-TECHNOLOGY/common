import express, { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-errors";


export const errorHandler = (err: Error, req:Request, res:Response, next:NextFunction) => {
    if (err instanceof CustomError) {
        let serializedErrors = err.serializeErrors()
        return res.status(err.statusCode).json({errors:serializedErrors})
    }
    console.error(err);
    res.status(400).json({
        errors: [{message:'Something went wrong'}]
    });
}