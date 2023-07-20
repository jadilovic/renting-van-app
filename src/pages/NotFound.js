import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className="not-found-container">
			<h1>Not Found</h1>
			<Link
				style={{
					backgroundColor: 'green',
					width: '100%',
					textAlign: 'center',
					margin: '2em',
				}}
				to={'/'}
			>
				Back Home
			</Link>
		</div>
	);
};
export default NotFound;
