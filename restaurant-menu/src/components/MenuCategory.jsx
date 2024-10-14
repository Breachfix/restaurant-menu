// src/components/MenuCategory.jsx
import React from 'react';
import MenuItem from './MenuItem';
import styles from './MenuCategory.module.css';

const MenuCategory = ({ category, items }) => (
    <div className={styles['menu-category']}>
        <h2 className={styles['category-title']}>{category}</h2>
        {items.map((item, index) => (
            <MenuItem 
                key={index} 
                name={item.name} 
                price={item.price} 
                description={item.description} 
                image={item.image} 
            />
        ))}
    </div>
);

export default MenuCategory;