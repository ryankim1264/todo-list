import { useState } from 'react';
import { tasks as initialTasks } from '../data/tasks';
import TaskItem from './TaskItem';
import TasksCount from './TasksCount';
import AddTaskForm from './AddTaskForm';

const TaskList = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleComplete = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const addTask = (taskTitle) => {
    const newTask = {
      id: Date.now(), 
      title: taskTitle,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  return (
    <div>
      <AddTaskForm onAddTask={addTask} />
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={() => toggleComplete(task.id)}
          onDelete={() => deleteTask(task.id)}
        />
      ))}
      <TasksCount tasks={tasks} />
    </div>
  );
};

export default TaskList;