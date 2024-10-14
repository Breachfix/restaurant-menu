// src/components/MenuCategory.jsx
import React from 'react';
import MenuItem from './MenuItem';

const MenuCategory = ({ category, items }) => {
    return (
        <div className="menu-category">
            <h2>{category}</h2>
            {items.map((item) => (
                <MenuItem key={item.name} {...item} />
            ))}
        </div>
    );
};

export default MenuCategory;