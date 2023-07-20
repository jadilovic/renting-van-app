import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const VanDetail = () => {
	const params = useParams();
	const location = useLocation();
	const { vanId } = params;
	const [van, setVan] = useState(null);
	const search = location.state?.search || '';

	useEffect(() => {
		// const getVan = async () => {
		// 	console.log(vanId);
		// 	const response = await fetch('/api/vans/' + vanId);
		// 	const data = await response.json();
		// 	setVan(data.vans);
		// };
		// getVan();
		fetch(`/api/vans/${vanId}`)
			.then((response) => response.json())
			.then((data) => setVan(data.vans))
			.catch((error) => console.log(error));
	}, [vanId]);

	return (
		<>
			{van ? (
				<div>
					<Link
						style={{ fontSize: '2em' }}
						to={`../?${search}`}
						relative="path"
					>
						{`Back to ${search ? search.split('=').pop() : 'all'} vans`}
					</Link>
					<h1>Van</h1>
					<p>{van.name}</p>
				</div>
			) : (
				<h2>Loading...</h2>
			)}
		</>
	);
};
export default VanDetail;
