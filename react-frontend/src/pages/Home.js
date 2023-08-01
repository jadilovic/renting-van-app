import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
	const location = useLocation();
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount(count + 1);
	};

	const decrement = () => {
		setCount(count - 1);
	};

	return (
		<div>
			<h1>Home</h1>
			<p>{location.state}</p>
			<h2>{count}</h2>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
};
export default Home;
