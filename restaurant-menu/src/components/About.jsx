// src/components/About.jsx
import React from 'react';
import styles from './About.module.css';

const About = () => (
    <div className={styles.about}>
        <h2>About Us</h2>
        <p>
            This restaurant was founded on a passion for health and well-being, inspired by our founder's journey of creating wholesome, nutritious meals. 
            Originally started by my father, we have rejuvenated this family legacy to focus on health-conscious dining, bringing our beloved restaurant back to life in 2024.
        </p>
        <p>
            We believe in the healing power of food. Our menu is designed to nourish the body and uplift the spirit, following principles of health that emphasize balance, sustainability, and holistic wellness.
        </p>
        <p>
            Visit us and join our journey of making health the priority.
        </p>
    </div>
);

export default About;