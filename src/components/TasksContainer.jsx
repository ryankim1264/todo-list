import TaskItem from './TaskItem';

const TasksContainer = ({ todos, setTodos }) => {
	return (
		<div className="tasks-container">
			<div className="tasks-header">
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
