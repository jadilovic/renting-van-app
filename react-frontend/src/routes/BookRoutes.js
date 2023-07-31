import { Route, Routes } from 'react-router-dom';
import BooksLayout from '../layouts/BooksLayout';
import BooksList from '../pages/BooksList';
import Book from '../pages/Book';
import NewBook from '../pages/NewBook';

const BookRoutes = () => {
	return (
		<Routes>
			<Route element={<BooksLayout />}>
				<Route index element={<BooksList />} />
				<Route path=":id" element={<Book />} />
				<Route path="new" element={<NewBook />} />
			</Route>
		</Routes>
	);
};
export default BookRoutes;
