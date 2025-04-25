import { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
// import DemonstratingState from './components/DemonstratingState';
import Header from './components/Header';
import TasksContainer from './components/TasksContainer';
import TasksCount from './components/TasksCount';


const App = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => setTodos(data));
	}, []);


	return (

		<div className="container">
           
			
			<Header />
			<AddTaskForm todos={todos} setTodos={setTodos} />
			<TasksContainer todos={todos} setTodos={setTodos} />
			<TasksCount />
			{/* <DemonstratingState /> */}
		</div>
	);
};
export default App;
