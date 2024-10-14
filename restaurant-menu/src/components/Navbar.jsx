import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../style/Navbar.module.css';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setHidden(true); // Hide on scroll down
            } else {
                setHidden(false); // Show on scroll up
            }
            lastScrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${hidden ? styles.hidden : ''}`}>
            <NavLink to="/" className={styles.link}>Welcome</NavLink>
            <NavLink to="/about" className={styles.link}>About Us</NavLink>
            <NavLink to="/menu" className={styles.link}>Menu</NavLink>
            <NavLink to="/reviews" className={styles.link}>Reviews</NavLink>
            <NavLink to="/contact" className={styles.link}>Contact</NavLink>
        </nav>
    );
};

export default Navbar;