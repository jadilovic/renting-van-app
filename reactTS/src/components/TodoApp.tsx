import { useState, FormEvent } from 'react';

interface Todo {
	id: string;
	text: string;
	isCompleted: boolean;
}

const TodoApp = () => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [inputText, setInputText] = useState<string>('');

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (inputText === '') return;

		const newTodo: Todo = {
			id: crypto.randomUUID(),
			text: inputText,
			isCompleted: false,
		};
		setTodos([...todos, newTodo]);
		setInputText('');
	};

	const toggleCompleted = (todoId: string) => {
		// const updatedTodos: Todo[] = todos.map((item) => {
		// 	if (item.id === todoId) {
		// 		item.isCompleted = !item.isCompleted;
		// 		return item;
		// 	} else {
		// 		return item;
		// 	}
		// });
		// setTodos([...updatedTodos]);
		const updatedTodos: Todo[] = todos.map((item) => {
			if (item.id === todoId) {
				return {
					...item,
					isCompleted: !item.isCompleted,
				};
			} else {
				return item;
			}
		});
		setTodos([...updatedTodos]);
	};

	const handleDelete = (todoId: string): void => {
		const updatedTodos = todos.filter((item) => item.id !== todoId);
		setTodos(updatedTodos);
	};

	console.log(todos);

	return (
		<div>
			<h1>Todo App</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="todo">Todo</label>
				<input
					onChange={(e) => setInputText(e.target.value)}
					value={inputText}
					type="text"
					name="todo"
					id="todo"
				/>
				<button type="submit">Add Todo</button>
			</form>
			<ul>
				{todos.length > 0 ? (
					todos.map((item) => {
						return (
							<div key={item.id}>
								<h3
									style={{
										textDecoration: item.isCompleted ? 'line-through' : 'none',
									}}
									onClick={() => toggleCompleted(item.id)}
								>
									{item.text}
								</h3>
								<button onClick={() => handleDelete(item.id)}>Delete</button>
							</div>
						);
					})
				) : (
					<h3>No todos created</h3>
				)}
			</ul>
		</div>
	);
};
export default TodoApp;
