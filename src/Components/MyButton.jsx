import React from 'react';
import './MyButton.css';
import { Link } from 'react-router-dom';

const STYLES = ['donate-btn-green', 'donate-btn-blue', 'learn-btn', 'outline-btn'];

export const MyButton = ({
    children,
    type,
    onClick,
    buttonStyle,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    return (
        <Link to='/evenements/evntdesc'>
            <button
                id='myBtn'
                className={`${checkButtonStyle}`}
                onClick={onClick}
                type={type}
            >
                {children}
            </button>
        </Link>
    );
};
