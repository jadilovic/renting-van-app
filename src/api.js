export const getVans = async () => {
	const response = await fetch('/api/vans');
	const data = await response.json();
	return data;
};
