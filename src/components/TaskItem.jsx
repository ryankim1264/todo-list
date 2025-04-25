import { useState } from 'react';
import Button from './Button';
import Input from './Input';

const TaskItem = ({ task , onDelete , onToggle}) => {
  const [completed, setCompleted] = useState(task.completed);

  function handleChange() {
    setCompleted(!completed);
	onToggle()
  }

  return (
    <div className="task">
      <Input
        type="checkbox"
        className="checkbox"
        checked={completed}
        onChange={handleChange}
      />

      <span>{task.title}</span>

      <Button buttonClass="delete-button" onClick={onDelete}>
        <i className="fa-solid fa-trash"></i>
      </Button>
    </div>
  );
};

export default TaskItem;
