import { useContext } from 'react';
import { Theme } from '../context';

const NewBook = () => {
	const theme = useContext(Theme);
	return (
		<div>
			<h1>New Book</h1>
			<h2>{theme}</h2>
		</div>
	);
};
export default NewBook;
