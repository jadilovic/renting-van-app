// ✅ Good Practice: Open-Closed Principle

// Button.js
// Existing Button functional component
const Button = ({ text, onClick }) => {
	return <button onClick={() => onClick(text)}>{text}</button>;
};

// IconButton.js
// IconButton component
// ✅ Good: You have not modified anything here.
const IconButton = ({ text, icon, onClick }) => {
	return (
		<button onClick={() => onClick(text)}>
			<i className={icon} />
			<span>{text}</span>
		</button>
	);
};

const OpenClosedPrinciple = () => {
	const handleClick = (text) => {
		// Handle button click event
		console.log(text);
	};

	return (
		<div className="btn-container">
			<Button text="Button Submit" onClick={handleClick} />
			<IconButton
				text="IconButton Submit"
				icon="fas fa-heart"
				onClick={handleClick}
			/>
		</div>
	);
};

export default OpenClosedPrinciple;
