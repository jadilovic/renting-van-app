import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<header>
			<NavLink to={'/'}>#VanLife</NavLink>
			<nav>
				<NavLink
					className={({ isActive }) => (isActive ? 'active' : '')}
					to={'/host'}
				>
					Host
				</NavLink>
				<NavLink to={'/vans'}>Vans</NavLink>
				<NavLink to={'/about'}>About</NavLink>
			</nav>
		</header>
	);
};
export default Header;
