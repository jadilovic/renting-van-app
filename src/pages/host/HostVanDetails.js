import { useState, useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const HostVanDetails = () => {
	// const { id } = useParams();
	// const [van, setVan] = useState(null);

	// useEffect(() => {
	// 	fetch(`/api/host/vans/${id}`)
	// 		.then((response) => response.json())
	// 		.then((data) => setVan(data.vans[0]))
	// 		.catch((error) => console.log(error));
	// }, [id]);

	// console.log(van);

	const [van, setVan] = useOutletContext();

	return (
		<div>
			{van ? (
				<div>
					<h3>Van ID: {van.id}</h3>
					<h3>{van.name}</h3>
					<p>{van.price}</p>
					<p>{van.description}</p>
				</div>
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
};
export default HostVanDetails;
