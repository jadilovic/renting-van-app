import { useEffect, useState } from 'react';
import DependencyInversionPrinciple from './DependencyInversionPrinciple';
import InterfaceSegregationPrinciple from './InterfaceSegregationPrinciple';
import LiskovSubstitutionPrinciple from './LiskovSubstitutionPrinciple';
import OpenClosedPrinciple from './OpenClosedPrinciple';
import './App.css';
import SingleResponsibilityPrinciple from './SingleResponsibilityPrinciple';

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
			<SingleResponsibilityPrinciple />
			<OpenClosedPrinciple />
			<LiskovSubstitutionPrinciple />
			<InterfaceSegregationPrinciple />
			<DependencyInversionPrinciple />
		</div>
	);
};
export default App;
