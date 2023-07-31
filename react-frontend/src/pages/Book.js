import { useOutletContext, useParams } from 'react-router-dom';

const Book = () => {
	const { id } = useParams();
	const { book } = useOutletContext();

	console.log(id, book);

	return (
		<div>
			Book ID: {id} and name {book}
		</div>
	);
};
export default Book;
