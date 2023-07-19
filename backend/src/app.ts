import express from 'express';
import MessageResponse from '../interfaces/MessageResponse';
import * as middlewares from '../middlewares/middleware';
import router from '../routes';

const app = express();

app.get<{}, MessageResponse>('/', (req, res) => {
	res.json({ message: 'Bob' });
});

app.use('/api/v1/', router);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
