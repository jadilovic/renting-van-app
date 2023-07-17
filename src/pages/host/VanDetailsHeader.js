import { NavLink } from 'react-router-dom';

const VanDetailsHeader = () => {
	const activeStyle = {
		color: 'red',
	};

	return (
		<header style={{ width: '50vw' }}>
			<NavLink
				style={({ isActive }) => (isActive ? activeStyle : null)}
				end
				to={'.'}
			>
				Details
			</NavLink>
			<NavLink to={'pricing'}>Pricing</NavLink>
			<NavLink to={'photos'}>Photos</NavLink>
		</header>
	);
};
export default VanDetailsHeader;
