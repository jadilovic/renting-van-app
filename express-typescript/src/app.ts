import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';
import routes from './routes';
import { gamesRouter } from './routes/games.router';
import { connectToMongoDB } from './services/database.service';
// import { connectToDatabase } from './db';

const app = express();
app.use(express.json());

app.use(helmet());

app.use('/games', gamesRouter);

const PORT = process.env.PORT || 5000;

app.get('/', (req: express.Request, res: express.Response) => {
	res.send('Hello World');
});

app.post('/greeting', (req: express.Request, res: express.Response) => {
	res.send('Greeting');
});

app.post('/api/v1/data', (req: Request, res: Response) => {
	console.log(req.body);
	res.sendStatus(200);
});

const addPrice =
	({ user }: { user: string }) =>
	(req: Request, res: Response, next: NextFunction) => {
		console.log(req.body);
		// req.user = user;
		req.body.price = 20;
		res.locals.user = user;
		next();
	};

app
	.route('/different/:id/:authorId')
	.get(addPrice({ user: 'Aki' }), (req: Request, res: Response) => {
		// const { user } = req;
		console.log(res.locals.user);

		const { user } = res.locals;
		const { id, authorId } = req.params;
		const { price } = req.body;
		res.send(
			'GET request ' +
				id +
				' and author: ' +
				authorId +
				' and price is ' +
				price +
				' and user : ' +
				user
		);
	});

// app.get(
// 	'/books/:bookId/:authId',
// 	(
// 		req: Request<{ bookId: string; authId: string }, {}, { user: string }, {}>,
// 		res: Response
// 	) => {
// 		console.log(req.params.authId);
// 		console.log(req.body.user);
// 		console.log(req.query);

// 		res.send('Books');
// 	}
// );

routes(app);

async function throwingError() {
	throw new Error('Boom!');
}

app.get('/error', async (req, res) => {
	try {
		await throwingError();
		res.status(200).send('It worked OK');
	} catch (e) {
		res.status(400).send('Something bad happened!');
	}
});

app
	.route('/test')
	.post((req: Request, res: Response) => {
		res.send('POST request');
	})
	.put((req: Request, res: Response) => {
		res.send('PUT request');
	});

app.all('/api/v1/all', (req: Request, res: Response) => {
	res.redirect('/greeting');
});

app.listen(PORT, async () => {
	try {
		await connectToMongoDB();
		console.log('Connected to MongoDB');
	} catch (error) {
		console.log('Failed to connect to MongoDB', error);
	}
	console.log('Server is listening at port ' + PORT);
});

// connectToDatabase();
