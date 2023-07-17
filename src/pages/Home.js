import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="home-container">
			<h1>Home</h1>
			<h3>You got travel plans, we got vans</h3>
			<p>
				Add adventure to you life Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Nulla ea ad nostrum esse dicta, at sapiente
				exercitationem tempore neque aliquid consequatur repellendus ab
				incidunt, quaerat quidem vitae dignissimos recusandae eos!
			</p>
			<Link to={'/vans'}>Vans</Link>
		</div>
	);
};
export default Home;
