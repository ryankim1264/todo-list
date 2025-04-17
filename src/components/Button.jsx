const Button = ({ id, type, buttonClass, children, onClick ,onBlur}) => {
	return (
		<button id={id} type={type} className={buttonClass} onClick={onClick} onBlur={onBlur}>
			{children}
		</button>
	);
};

export default Button;
