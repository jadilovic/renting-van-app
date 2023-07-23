import { Request, Response } from 'express';

export const getBooksHandler = (
	req: Request<{ bookId: string; authId: string }, {}, { user: string }, {}>,
	res: Response
) => {
	console.log(req.params.authId);
	console.log(req.body.user);
	console.log(req.query);

	res.send('Books');
};
