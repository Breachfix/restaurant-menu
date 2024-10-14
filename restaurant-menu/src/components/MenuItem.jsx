// src/components/MenuItem.jsx
import React from 'react';

const MenuItem = ({ name, price, description, image }) => {
    return (
        <div className="menu-item">
            <img src={`/images/${image}`} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <p className="price">${price.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default MenuItem;