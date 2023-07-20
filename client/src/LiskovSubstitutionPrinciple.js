// ✅ Good Practice
// This component follows the Liskov Substitution Principle and allows the use of select's characteristics.
import { useEffect, useState } from 'react';

const CustomSelect = ({
	value,
	iconClassName,
	handleChange,
	defaultValue,
	...props
}) => {
	return (
		<div>
			<i className={iconClassName}></i>
			<select value={value} onChange={handleChange} {...props}>
				<option value={1}>One</option>
				<option value={2}>Two</option>
				<option value={3}>Three</option>
			</select>
		</div>
	);
};

const LiskovSubstitutionPrinciple = () => {
	const [value, setValue] = useState(1);

	useEffect(() => {
		console.log(value);
	}, [value]);

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return (
		<div>
			{/* ✅ This CustomSelect component follows the Liskov Substitution Principle */}
			<CustomSelect
				value={value}
				iconClassName={'icon'}
				handleChange={handleChange}
				defaultValue={1}
			/>
		</div>
	);
};

export default LiskovSubstitutionPrinciple;
