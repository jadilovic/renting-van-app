import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VanDetail = () => {
	const params = useParams();
	const { vanId } = params;
	const [van, setVan] = useState(null);

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
