import express, { NextFunction, Request, Response } from 'express';

const app = express();
app.use(express.json());

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
		// @ts-ignore
		req.user = user;
		req.body.price = 20;
		next();
	};

app
	.route('/different/:id/:authorId')
	.get(addPrice({ user: 'Aki' }), (req: Request, res: Response) => {
		// @ts-ignore
		const { user } = req;
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
	})
	.post((req: Request, res: Response) => {
		res.send('POST request');
	})
	.put((req: Request, res: Response) => {
		res.send('PUT request');
	});

app.all('/api/v1/all', (req: Request, res: Response) => {
	res.redirect('/greeting');
});

app.listen(3000, () => {
	console.log('Server is listening at port 3000');
});
