import { API_URL } from '../App';
import Button from './Button';
import Input from './Input';

const TaskItem = ({ todo, setTodos, todos }) => {
	async function handleChange(id) {
		// Optimistic UI update
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);

		const response = await fetch(`${API_URL}/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ completed: !todo.completed }),
		});

		if (!response.ok) {
			// If the API call fails, revert the state change
			setTodos((prevTodos) =>
				prevTodos.map((todo) =>
					todo.id === id ? { ...todo, completed: !todo.completed } : todo
				)
			);
		}
	}

	/*
	 Fetching without async-await syntax

		function handleChange(id) {
			// Optimistic UI update
			setTodos((prevTodos) =>
				prevTodos.map((todo) =>
					todo.id === id ? { ...todo, completed: !todo.completed } : todo
				)
			);

			fetch(`${API_URL}/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ completed: !todo.completed }),
			}).then((response) => {
				if (!response.ok) {
					// If the API call fails, revert the state change
					setTodos((prevTodos) =>
						prevTodos.map((todo) =>
							todo.id === id ? { ...todo, completed: !todo.completed } : todo
						)
					);
				}
			});
		}
	*/

	async function handleClick(id) {
		// Optimistic UI update
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

		const response = await fetch(`${API_URL}/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			setTodos(todos);
		}
	}

	/*
		function handleClick(id) {
			// Optimistic UI update
			setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

			fetch(`${API_URL}/${id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
			}).then((response) => {
				if (!response.ok) {
					setTodos(todos);
				}
			});
		}
		*/

	return (
		<div
			className="task"
			style={{
				opacity: todo.completed ? '0.3' : '1',
			}}
		>
			<Input
				type="checkbox"
				className="checkbox"
				checked={todo.completed}
				onChange={() => handleChange(todo.id)}
				value={todo.completed}
			/>

			<span
				style={{
					textDecoration: todo.completed === true ? 'line-through' : '',
				}}
			>
				{todo.title}
			</span>

			<Button buttonClass="delete-button" onClick={() => handleClick(todo.id)}>
				<i className="fa-solid fa-trash"></i>
			</Button>
		</div>
	);
};

export default TaskItem;
