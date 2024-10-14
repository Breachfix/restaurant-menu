// src/components/Welcome.jsx
// src/components/Welcome.jsx
import React from 'react';
import styles from '../style/Welcome.module.css';

const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <h2>Welcome to Our Health-Focused Restaurant</h2>
            <p>Where every meal is crafted with your wellness in mind. Embrace a lifestyle that nurtures both body and soul with wholesome, nutritious dishes.</p>
            
            <div className={styles.features}>
                <div className={styles.feature}>
                    <h3>Fresh Ingredients</h3>
                    <p>We prioritize organic, locally-sourced ingredients to provide the best taste and nutrition.</p>
                </div>
                <div className={styles.feature}>
                    <h3>Healthy Philosophy</h3>
                    <p>Our menu is designed around the NEWSTART principles: Nutrition, Exercise, Water, Sunshine, Temperance, Air, Rest, and Trust.</p>
                </div>
                <div className={styles.feature}>
                    <h3>Balanced Meals</h3>
                    <p>Our dishes are crafted to provide balanced nutrients, promoting better health, energy, and well-being.</p>
                </div>
            </div>

<img src="/images/Anti-Inflammatory-Vegan-Green-Smoothie.jpg" alt="Delicious Healthy Meals" className={styles.mainImage} />
        </div>
    );
};

export default Welcome;