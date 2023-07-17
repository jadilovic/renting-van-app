import { useState, useEffect } from 'react';
import { Outlet, Link, useParams } from 'react-router-dom';
import VanDetailsHeader from './VanDetailsHeader';
import VanHeader from './VanHeader';

const HostVanDetailsLayout = () => {
	const { id } = useParams();
	const [van, setVan] = useState(null);

	useEffect(() => {
		fetch(`/api/host/vans/${id}`)
			.then((response) => response.json())
			.then((data) => setVan(data.vans[0]))
			.catch((error) => console.log(error));
	}, [id]);

	console.log(van);

	if (!van) {
		return <h1>Loading...</h1>;
	}

	return (
		<div>
			<Link style={{ fontSize: '2em' }} to={'..'} relative="path">
				Back to host vans
			</Link>
			<VanHeader van={van} />
			<VanDetailsHeader />
			<Outlet context={[van, setVan]} />
		</div>
	);
};
export default HostVanDetailsLayout;
