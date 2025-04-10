import { useState } from 'react';
import { tasks } from '../data/tasks';
import Input from './Input';
import TaskItem from './TaskItem';

const TasksContainer = () => {
	const [todos, setTodos] = useState(tasks);

	return (
		<div className="tasks-container">
			<div className="tasks-header">
				<h2>Your Tasks</h2>
			</div>

			<div id="tasks-list">
				{todos.map((task, index) => (
					<TaskItem key={index} task={task} />
				))}
			</div>
		</div>
	);
};

export default TasksContainer;
