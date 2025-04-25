<<<<<<< HEAD
import TaskItem from './TaskItem';

const TasksContainer = ({ todos, setTodos }) => {
=======
import { useState } from 'react';
import { tasks } from '../data/tasks';
import Input from './Input';
import TaskItem from './TaskItem';

const TasksContainer = () => {
	

>>>>>>> bb7b8c5 (done)
	return (
		<div className="tasks-container">
			<div className="tasks-header"
			>
				<h2>Your Tasks</h2>
			</div>

			<div id="tasks-list">
				{todos.map((task, index) => (
					<TaskItem key={index} todo={task} setTodos={setTodos} todos={todos} />
				))}
			</div>
		</div>
	);
};

export default TasksContainer;
