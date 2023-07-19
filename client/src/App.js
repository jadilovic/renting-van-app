import { useEffect, useState } from 'react';

const App = () => {
	const [backendData, setBackendData] = useState([]);

	useEffect(() => {
		fetch('/api/mongodb')
			.then((res) => res.json())
			.then((data) => setBackendData(data))
			.catch((error) => console.log(error));
	}, []);

	return (
		<div>
			<h1>Data</h1>
			{backendData.length > 0 ? (
				backendData.map((app) => {
					return <p key={app.name}>{app.name}</p>;
				})
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};
export default App;
