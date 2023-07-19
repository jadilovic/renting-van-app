import express from 'express';
import hello from './hello';
import MessageResponse from '../interfaces/MessageResponse';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
	res.json({
		message: 'Root API',
	});
});

router.use('/hello', hello);

export default router;
