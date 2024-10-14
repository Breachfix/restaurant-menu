// src/components/Reviews.jsx
import React, { useState } from 'react';
import styles from '../style/Reviews.module.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setReviews([...reviews, comment]);
        setComment('');
    };

    return (
        <div className={styles.reviews}>
            <h2>Customer Reviews</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Leave a comment..."
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Submit</button>
            </form>
            <ul className={styles.reviewList}>
                {reviews.map((review, index) => (
                    <li key={index} className={styles.reviewItem}>{review}</li>
                ))}
            </ul>
        </div>
    );
};

export default Reviews;