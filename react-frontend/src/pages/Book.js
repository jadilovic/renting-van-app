import { useLocation, useOutletContext, useParams } from 'react-router-dom';

const Book = () => {
	const location = useLocation();
	const { id } = useParams();
	const { book } = useOutletContext();
	const params = useParams();
	const out = useOutletContext();

	console.log(id, book, out, params, location.state);

	return (
		<div>
			Book ID: {id} and name {book}
		</div>
	);
};
export default Book;
