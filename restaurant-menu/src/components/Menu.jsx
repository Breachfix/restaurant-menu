// src/components/Menu.jsx
import React from 'react';
import MenuCategory from './MenuCategory';
import styles from '../style/Menu.module.css';

const menuData = [
    {
        id: 1,
        category: "Starters",
        items: [
            { 
                name: "Bruschetta", 
                price: 6.99, 
                description: "Grilled bread with tomato, basil, and mozzarella.", 
                image: "bruschetta.jpg" 
            },
            { 
                name: "Stuffed Portobello Mushrooms", 
                price: 8.99, 
                description: "Portobello mushrooms filled with cheese and herbs.", 
                image: "stuffed-portobello-mushrooms.jpg" 
            },
            {
                name: "Anti-Inflammatory Vegan Green Smoothie",
                price: 5.99,
                description: "A refreshing green smoothie packed with anti-inflammatory ingredients.",
                image: "Anti-Inflammatory-Vegan-Green-Smoothie.jpg"
            },
            {
                name: "Grilled Veggie Skewers",
                price: 7.99,
                description: "Grilled vegetables skewered and seasoned to perfection.",
                image: "greenevi-grilled-veggie-skewers.webp"
            }
        ]
    },
    {
        id: 2,
        category: "Main Courses",
        items: [
            { 
                name: "Ultimate Healthy Vegan Black Bean Burger", 
                price: 12.99, 
                description: "Black bean burger served with lettuce, tomato, and vegan mayo.", 
                image: "Ultimate-Healthy-Vegan-Black-Bean-Burger_06.jpg" 
            },
            {
                name: "Maple Soy Baked Tofu",
                price: 11.99,
                description: "Tofu baked with a maple soy glaze, served with a side of greens.",
                image: "Maple-Soy-Baked-Tofu.jpg"
            },
            {
                name: "Tofu Stir-fry",
                price: 10.99,
                description: "Tofu with mixed vegetables and soy sauce.",
                image: "Tofu-Stir-Fry.jpg"
            }
        ]
    },
    {
        id: 3,
        category: "Vegan Options",
        items: [
            { 
                name: "Vegan Carrot Cake", 
                price: 7.99, 
                description: "A delicious raw vegan carrot cake with nuts and spices.", 
                image: "Raw-Vegan-Carrot-Cake-vert.jpg" 
            },
            {
                name: "Vegan Mango Dessert",
                price: 6.99,
                description: "A refreshing dessert made with mango and plant-based ingredients.",
                image: "Mango-Dessert-Vegan-Plant-Based.webp"
            }
        ]
    },
    {
        id: 4,
        category: "Drinks",
        items: [
            { 
                name: "Mango Lemonade", 
                price: 4.99, 
                description: "Sweet and tangy lemonade infused with mango.", 
                image: "Mango-Lemonade.jpg" 
            }
        ]
    },
    {
        id: 5,
        category: "Desserts",
        items: [
            { 
                name: "Vegan Mango Dessert", 
                price: 6.99, 
                description: "Refreshing mango dessert made with plant-based ingredients.", 
                image: "Mango-Dessert-Vegan-Plant-Based.webp" 
            },
            { 
                name: "Raw Vegan Carrot Cake", 
                price: 7.99, 
                description: "A wholesome raw carrot cake with spices and nuts.", 
                image: "Raw-Vegan-Carrot-Cake-vert.jpg" 
            }
        ]
    }
  ];
  

  const Menu = () => (
    <div className={styles.menu}>
        <h2 className={styles.menuTitle}>Our Menu</h2>
        {menuData.map((category) => (
            <MenuCategory key={category.category} category={category.category} items={category.items} />
        ))}
    </div>
);

export default Menu;

