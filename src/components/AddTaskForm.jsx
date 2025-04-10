import Button from './Button';
import Input from './Input';

const AddTaskForm = () => {
	return (
		<div className="add-task-container">
			<form
				id="add-task-form"
				onSubmit={() => alert('The form has been submitted')}
			>
				<Input id="task-input" placeholder="Add a new task..." required />

				<Button id="add-task-btn">
					<i className="fas fa-plus"></i>
				</Button>
			</form>
		</div>
	);
};

export default AddTaskForm;
