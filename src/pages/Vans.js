import { useEffect, useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../api';

const Vans = () => {
	const [vans, setVans] = useState([]);
	const [typeFilter, setTypeFilter] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const handleVans = async () => {
			const data = await getVans();
			if (searchParams.has('type')) {
				setVans(
					data.vans.filter((van) => van.type === searchParams.get('type'))
				);
			} else {
				setVans(data.vans);
			}
		};
		handleVans();

		setTypeFilter(searchParams.get('type'));
	}, [searchParams]);

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
				<button
					style={{
						background: typeFilter === 'rugged' ? 'yellow' : '',
					}}
					onClick={() => setSearchParams({ type: 'rugged' })}
				>
					Rugged
				</button>
				<button
					style={{
						background: typeFilter === 'simple' ? 'yellow' : '',
					}}
					onClick={() => setSearchParams({ type: 'simple' })}
				>
					Simple
				</button>
				<button
					style={{
						background: typeFilter === 'luxury' ? 'yellow' : '',
					}}
					onClick={() => setSearchParams({ type: 'luxury' })}
				>
					Luxury
				</button>
				{searchParams.has('type') ? (
					<button onClick={() => setSearchParams({})}>Clear Filters</button>
				) : null}
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
						<Link
							to={van.id}
							key={van.id}
							state={{ search: searchParams.toString() }}
						>
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
