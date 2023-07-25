import { Request, Response } from 'express';
import { collections, connectToMongoDB } from './services/database.service';

export const getBooksHandler = async (
	req: Request<{ bookId: string; authId: string }, {}, { user: string }, {}>,
	res: Response
) => {
	await connectToMongoDB();
	console.log(req.params.authId);
	console.log(req.body.user);
	console.log(req.query);
	const pets = await collections.games?.find({}).toArray();
	console.log(pets);

	res.json(pets);
};
