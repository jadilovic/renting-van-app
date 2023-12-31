// External Dependencies
import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { collections } from '../services/database.service';
import Game from '../models/games';

// Global Config
export const gamesRouter = express.Router();
gamesRouter.use(express.json());

// GET
gamesRouter.get('/', async (req: Request, res: Response) => {
	try {
		let priceFilter: number = req.query.price ? Number(req.query.price) : 0;
		let nameFilter: object = req.query.name ? { name: req.query.name } : {};
		const games = await collections.games
			// ?.find({ price: { $gte: priceFilter }, ...nameFilter })
			// ?.find({ $or: [{ price: 13 }, { name: 'cuni' }, { category: 'boby' }] })
			// ?.find({ $or: [{ price: { $gt: 24 } }, { price: { $lt: 13 } }] })
			// ?.find({ price: { $in: [11, 16] } })
			// ?.find({ genres: 'drama' })
			// ?.find({ genres: ['horror'] })
			// ?.find({ 'models.model': 4 })
			?.find({})
			// ?.updateMany({}, { $push: { genres: 'John' } })
			// ?.find({ genres: { $all: ['horror', 'old'] } })
			.sort({ price: -1 })
			.limit(20)
			.toArray();
		res.status(200).send(games);
	} catch (error) {
		console.log('Error: ' + error);
		res.status(500).send(error);
	}
});

gamesRouter.get('/:id', async (req: Request, res: Response) => {
	const id = req?.params?.id;
	try {
		const query = { _id: new ObjectId(id) };
		const game = await collections.games?.findOne(query);
		if (game) {
			res.status(200).send(game);
		} else {
			res.status(400).send('Unable to find matching game with id : ' + id);
		}
	} catch (error) {
		res.status(404).send('Unable to find matching game with id : ' + id);
	}
});

// POST
gamesRouter.post('/', async (req: Request, res: Response) => {
	try {
		const newGame = req.body;
		const result = await collections.games?.insertOne(newGame);
		result
			? res
					.status(201)
					.send(
						'New game was successfully created with id : ' + result.insertedId
					)
			: res.status(500).send('Failed to create new game!');
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
});

// PUT
gamesRouter.put('/:id', async (req: Request, res: Response) => {
	const id = req?.params?.id;
	try {
		const updatedGame: Game = req.body as Game;
		const query = { _id: new ObjectId(id) };
		// const result = await collections.games?.updateOne(query, {
		// 	$set: updatedGame,
		// });
		// const result = await collections.games?.updateMany(
		// 	{ name: 'aki-akiovic' },
		// 	{
		// 		$set: { name: 'aki-adilovic' },
		// 	}
		// );
		// const result = await collections.games?.updateMany(
		// 	{ price: 38 },
		// 	{
		// 		$inc: { price: -3 },
		// 	}
		// );
		// const result = await collections.games?.updateOne(
		// 	{ name: 'Fiat' },
		// 	{
		// 		$push: { genres: 'horror' },
		// 	}
		// );
		// const result = await collections.games?.updateOne(
		// 	{ name: 'Fiat3000' },
		// 	{
		// 		$pull: { genres: 'horror' },
		// 	}
		// );
		const result = await collections.games?.updateOne(
			{ name: 'Fiat5000' },
			{
				$push: { genres: ['bla', 'kla', 'swa'] },
			}
		);
		result
			? res.status(200).send('Updated game with id : ' + id)
			: res.status(304).send('Game was not updated id : ' + id);
	} catch (error) {
		res.status(400).send('No game found ' + error);
	}
});

// DELETE
gamesRouter.delete('/:id', async (req: Request, res: Response) => {
	const id = req?.params?.id;
	try {
		// const query = { _id: new ObjectId(id) };
		// const result = await collections.games?.deleteOne(query);
		// const result = await collections.games?.deleteOne({
		// 	genres: { $all: ['horror', 'old'] },
		// });
		// const result = await collections.games?.deleteMany({
		// 	genres: 'horror',
		// });
		const result = await collections.games?.deleteMany({
			'models.name': 'caravan',
		});
		if (result && result.deletedCount) {
			res.status(202).send('Successfully removed game with id : ' + id);
		} else if (!result) {
			res.status(400).send('Failed to remove the game with id : ' + id);
		} else if (!result.deletedCount) {
			res.status(500).send('Game with id ' + id + ' does not exist');
		}
	} catch (error) {
		console.error(error);
		res.status(400).send('error ' + error);
	}
});
