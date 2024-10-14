// src/components/Contact.jsx
import React from 'react';
import styles from '../style/Contact.module.css';

const Contact = () => (
    <div className={styles.contact}>
        <h2>Contact Us</h2>
        <p>Email: contact@healthrestaurant.com</p>
        <p>Phone: +123 456 7890</p>
        <p>Location: 123 Healthy Ave, Wellness City</p>
    </div>
);

export default Contact;