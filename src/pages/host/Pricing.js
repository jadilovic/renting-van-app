import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Pricing = () => {
	const [van, setVan] = useOutletContext();
	const arr = [1, 2, 4, 5, 8, 2, 4, 3, 8, 9];
	arr.reduce(
		(accumulator, currentValue, index, array) =>
			(array[index] = array[index] * 2)
	);
	console.log(Array.isArray(arr));

	const uniqueArr = [...new Set(arr)];
	console.log(uniqueArr);

	const isInt = (num) => num % 1 === 0;

	console.log(isInt('9'));

	return (
		<>
			<h3>Price: {van.price}</h3>
			<h4>Type: {van.type}</h4>
		</>
	);
};
export default Pricing;
