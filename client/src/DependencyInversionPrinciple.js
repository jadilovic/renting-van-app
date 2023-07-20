// ✅ Good Practice
// This component follows abstraction and promotes Dependency Inversion Principle
import { useState } from 'react';

const AbstractForm = ({ children, onSubmit }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		onSubmit();
	};

	return <form onSubmit={handleSubmit}>{children}</form>;
};

const DependencyInversionPrinciple = () => {
	const [email, setEmail] = useState('');

	const handleChange = (event) => {
		setEmail(event.target.value);
	};

	const handleFormSubmit = () => {
		console.log(email);
	};

	return (
		<div>
			{/** ✅ Use the abstraction instead */}
			<AbstractForm onSubmit={handleFormSubmit}>
				<input
					type="email"
					value={email}
					onChange={handleChange}
					name="email"
				/>
				<button type="submit">Submit</button>
			</AbstractForm>
		</div>
	);
};

export default DependencyInversionPrinciple;
