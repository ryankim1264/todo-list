const TasksCount = ({ tasks = [] }) => {
	// Filter out completed tasks
	const incompleteTasks = tasks.filter(task => !task.completed);
	const count = incompleteTasks.length;
  
	return (
	  <div className="task-stats">
		<p>
		  <span id="tasks-count">
			{count}
		  </span>
		  {count === 1 ? ' task' : ' tasks'} left
		</p>
	  </div>
	);
  };
  
  export default TasksCount;