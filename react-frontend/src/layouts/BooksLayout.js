import { Link, Outlet, useSearchParams } from 'react-router-dom';

const BooksLayout = () => {
	const [searchParams, setSearchParams] = useSearchParams({ n: 0 });
	const number = searchParams.get('n') || 0;
	return (
		<>
			<ul>
				<li>
					<Link to={'/books/1'}>Book 1</Link>
				</li>
				<li>
					<Link state={'hi'} to={'/books/2'}>
						Book 2
					</Link>
				</li>
				<li>
					<Link to={`/books/${number}`}>Book {number}</Link>
				</li>
				<li>
					<Link to={'/books/new'}>New Book</Link>
				</li>
			</ul>
			<Outlet context={{ book: '5 Friends' }} />
			<input
				type="number"
				value={number}
				onChange={(e) => setSearchParams({ n: e.target.value })}
			/>
		</>
	);
};
export default BooksLayout;
