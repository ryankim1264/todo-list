import Button from './Button';
import Input from './Input';

const AddTaskForm = () => {
	return (
		<div className="add-task-container">
			<form id="add-task-form">
				<Input id="task-input" placeholder="Add a new task..." required />

				<Button type="submit" id="add-task-btn">
					<i className="fas fa-plus"></i>
				</Button>
			</form>
		</div>
	);
};

export default AddTaskForm;
