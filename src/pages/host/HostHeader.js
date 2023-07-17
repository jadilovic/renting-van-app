import { NavLink } from 'react-router-dom';

const HostHeader = () => {
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
				Dashboard
			</NavLink>
			<NavLink to={'income'}>Income</NavLink>
			<NavLink to={'vans'}>Vans</NavLink>
			<NavLink to={'reviews'}>Reviews</NavLink>
		</header>
	);
};
export default HostHeader;
