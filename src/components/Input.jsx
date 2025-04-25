const Input = (props) => {
	return (
		<input
			placeholder={props.placeholder}
			type={props.type}
			id={props.id}
			className={props.className}
			required={props.required}
			checked={props.checked}
			onChange={props.onChange}
<<<<<<< HEAD
			value={props.value}
=======
			 
>>>>>>> bb7b8c5 (done)
		/>
	);
};

export default Input;