import { useOutletContext } from 'react-router-dom';

const Photos = () => {
	const [van, setVan] = useOutletContext();

	return <div>Photos: {van.imageUrl}</div>;
};
export default Photos;
