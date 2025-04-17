const Button = ({ id, type, buttonClass, children, onClick ,onBlur,onMouseEnter}) => {
	return (
		<button id={id} type={type} className={buttonClass} onClick={onClick} onBlur={onBlur} onMouseEnter={onMouseEnter}>
			{children}
		</button>
	);
};

export default Button;
