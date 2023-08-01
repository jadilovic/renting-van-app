import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigation = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigation('/', { state: 'Error not found' });
		}, 1000);
	}, [navigation]);

	return (
		<div>
			<h1>Not Found</h1>
		</div>
	);
};
export default NotFound;
