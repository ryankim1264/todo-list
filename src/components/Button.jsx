const Button = ({ id, type, buttonClass, children, onClick, onFocus }) => {
	return (
		<button
			id={id}
			type={type}
			className={buttonClass}
			onClick={onClick}
			onFocus={onFocus}
		>
			{children}
		</button>
	);
};

export default Button;
