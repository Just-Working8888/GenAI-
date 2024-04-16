import React, { ButtonHTMLAttributes } from 'react';
import classes from './Button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return <button className={classes.Button} {...props}>{children}</button>;
};

export default Button;