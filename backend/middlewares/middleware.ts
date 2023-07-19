import { Request, Response, NextFunction } from 'express';
import ErrorMessage from './ErrorResponse';

export const notFound = (req: Request, res: Response, next: NextFunction) => {
	res.status(404);
	const error = new Error('Entered path not found ' + req.originalUrl);
	next(error);
};

export const errorHandler = (
	err: Error,
	req: Request,
	res: Response<ErrorMessage>,
	next: NextFunction
) => {
	const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
	res.status(statusCode);
	res.json({
		message: err.message,
		stack: err.stack,
	});
};
