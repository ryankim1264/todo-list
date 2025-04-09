import { tasks } from '../data/tasks';
import { TbBrandSlack } from 'react-icons/tb';

const TasksContainer = () => {
	return (
		<div className="tasks-container">
			<div className="tasks-header">
				<h2>Your Tasks</h2>
			</div>

			<div id="tasks-list">
				{tasks.map((task, index) => (
					<div className="task" key={index}>
						<input
							type="checkbox"
							className="checkbox"
							checked={task.completed === true}
						/>

						<span>{task.title}</span>

						<button className="delete-button">
							<i className="fa-solid fa-trash"></i>
						</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default TasksContainer;
