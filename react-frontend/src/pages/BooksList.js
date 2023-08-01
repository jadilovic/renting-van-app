// import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

const BooksList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getUsers = async () => {
			const response = await fetch('https://gorest.co.in/public/v2/users');
			const data = await response.json();
			setUsers(data);
		};
		getUsers();
	}, []);

	return (
		<div>
			<h1>Books List</h1>
			{/* <ul>
				<li>
					<Link to={'/books/1'}>Book 1</Link>
				</li>
				<li>
					<Link to={'/books/2'}>Book 2</Link>
				</li>
				<li>
					<Link to={'/books/new'}>New Book</Link>
				</li>
			</ul> */}
			<div>
				{users.map((user) => {
					return (
						<div key={user.id}>
							<h3>{`ID: ${user.id}, Name: ${user.name}, Status: ${user.status}, Email: ${user.email}, Gender: ${user.gender}`}</h3>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default BooksList;
