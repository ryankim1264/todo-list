import { useState } from 'react';
import Button from './Button';
import Input from './Input';

const AddTaskForm = ({ todos, setTodos }) => {
	const [newTodo, setNewTodo] = useState({
		title: '',
		completed: false,
	});

	async function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div className="add-task-container">
			<form id="add-task-form">
				<Input id="task-input" placeholder="Add a new task..." required />

				<Button id="add-task-btn">
					<i className="fas fa-plus"></i>
				</Button>
			</form>
		</div>
	);
};

export default AddTaskForm;
