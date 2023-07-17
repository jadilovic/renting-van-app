import { useEffect, useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';

const Vans = () => {
	const [vans, setVans] = useState([]);
	const [typeFilter, setTypeFilter] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const getVans = async () => {
			const response = await fetch('/api/vans');
			const data = await response.json();
			if (searchParams.has('type')) {
				setVans(
					data.vans.filter((van) => van.type === searchParams.get('type'))
				);
			} else {
				setVans(data.vans);
			}
		};
		getVans();

		setTypeFilter(searchParams.get('type'));
	}, [searchParams]);

	console.log(typeFilter);

	return (
		<div className="vans-container">
			<h1>Vans</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quidem
				non animi nisi impedit pariatur.
			</p>
			<nav>
				{/* <Link to={'.'}>All</Link>
				<Link to={'?type=rugged'}>Rugged</Link>
				<Link to={'?type=simple'}>Simple</Link>
				<Link to={'?type=luxury'}>Luxury</Link> */}
				<button onClick={() => setSearchParams({})}>All</button>
				<button onClick={() => setSearchParams({ type: 'rugged' })}>
					Rugged
				</button>
				<button onClick={() => setSearchParams({ type: 'simple' })}>
					Simple
				</button>
				<button onClick={() => setSearchParams({ type: 'luxury' })}>
					Luxury
				</button>
			</nav>
			{vans.length > 0 ? (
				vans.map((van) => {
					return (
						// <div key={van.id}>
						// 	<h3
						// 		className="van-btn"
						// 		onClick={() => navigate('/vans/' + van.id)}
						// 	>
						// 		{van.name}
						// 	</h3>
						// </div>
						<Link to={'/vans/' + van.id} key={van.id}>
							<div className="van-btn">
								<h2>{van.name}</h2>
								<h3>{van.type}</h3>
							</div>
						</Link>
					);
				})
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
};
export default Vans;
