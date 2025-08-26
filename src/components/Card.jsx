import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
    return (
        <div
            className={`bg-white rounded-lg shadow-md overflow-hidden ${hover ? 'hover:shadow-lg transition-shadow duration-300' : ''
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
