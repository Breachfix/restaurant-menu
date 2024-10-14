// src/components/MenuItem.jsx
import React from 'react';
import styles from '../style/MenuItem.module.css';

const MenuItem = ({ name, price, description, image }) => (
    <div className={styles['menu-item']}>
        <img src={`/images/${image}`} alt={name} className={styles['item-image']} />
        <div className={styles['item-details']}>
            <h3 className={styles['item-name']}>{name}</h3>
            <p className={styles['item-description']}>{description}</p>
            <span className={styles['item-price']}>${price.toFixed(2)}</span>
        </div>
    </div>
);

export default MenuItem;