import { Express } from 'express';
import { getBooksHandler } from './booksController';

function routes(app: Express) {
	app.get('/books/:bookId/:authId', getBooksHandler);
}

export default routes;
