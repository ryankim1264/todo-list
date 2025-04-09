import React from 'react';

const Button = ({ id, type, buttonClass, children }) => {
	return (
		<button id={id} type={type} className={buttonClass}>
			{children}
		</button>
	);
};

export default Button;
