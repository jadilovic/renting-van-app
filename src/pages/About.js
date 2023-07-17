import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<div className="about-container">
				<h1>About</h1>
				<h3>
					Our story Lorem, ipsum dolor sit amet consectetur adipisicing elit.
					Debitis, et.
				</h3>
				<p>
					Add adventure to you life Lorem ipsum dolor sit amet consectetur
					adipisicing elit. Nulla ea ad nostrum esse dicta, at sapiente
					exercitationem tempore neque aliquid consequatur repellendus ab
					incidunt, quaerat quidem vitae dignissimos recusandae eos!
				</p>
				<Link to={'/vans'}>Vans</Link>
			</div>
		</div>
	);
};
export default About;
