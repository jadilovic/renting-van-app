import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HostVans = () => {
	const [vans, setVans] = useState([]);

	useEffect(() => {
		const getVans = async () => {
			const response = await fetch('/api/host/vans');
			const data = await response.json();
			setVans(data.vans);
		};
		getVans();
	}, []);

	return (
		<div className="vans-container">
			<h1>Vans</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quidem
				non animi nisi impedit pariatur.
			</p>
			{vans.length > 0 ? (
				vans.map((van) => {
					return (
						<Link to={van.id} key={van.id}>
							<h3 className="van-btn">{van.name}</h3>
						</Link>
					);
				})
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
};
export default HostVans;
