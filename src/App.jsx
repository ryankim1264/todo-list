import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import Button from './components/Button';
import Header from './components/Header';
import TasksContainer from './components/TasksContainer';
import TasksCount from './components/TasksCount';

const App = () => {
	const [count, setCount] = useState(200);

	let numb = 11;
	function directDOMManipulation() {
		const h2 = document.querySelector('h2');
		h2.innerText = numb += 1;
	}

	function stateManipulation() {
		setCount(count + 1);
	}

	return (
		<div className="container">
			<h2>{numb}</h2>
			<Button id="add-task-btn" onClick={directDOMManipulation}>
				Add
			</Button>

			<h1>{count}</h1>

			<Button id="add-task-btn" onClick={stateManipulation}>
				Add
			</Button>

			<Button id="add-task-btn">Subtract</Button>

			<Header />
			<AddTaskForm />
			<TasksContainer />
			<TasksCount />
		</div>
	);
};

export default App;
