const Button = ({ id, type, buttonClass, children, onClick }) => {
	return (
		<button id={id} type={type} className={buttonClass} onClick={onClick} >
			{children}
		</button>
	);
};

export default Button;
