import React, { useState, useEffect } from 'react';
import './Hero.css';
import discoverd from '../Assets/discoverd.webp'
import superhero from '../Assets/superhero.webp'
import manga from '../Assets/manga.jpg'
import scifi from '../Assets/scifi.jpg'


export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: "Discover the World of Comics!",
            image: discoverd,  // Statikus kép 1
            description: "Explore a wide variety of comic books from different genres."
        },
        {
            title: "Superheroes and Villains",
            image: superhero,  // Statikus kép 3
            description: "Join the fight between superheroes and villains in iconic stories."
        },
        {
            title: "Manga Mania!",
            image: manga,  // Manga kép
            description: "Explore captivating manga series and dive into unique art styles."
        },
        {
            title: "Sci-Fi Adventures",
            image: scifi,  // Sci-Fi kép
            description: "Step into futuristic worlds filled with technological wonders and mysteries."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Slide váltás 3 másodpercenként

        return () => clearInterval(interval); // Tisztítjuk az interval-t, ha a komponens eltűnik
    }, []);

    return (
        <div className="hero">
            <h2 className="welcome-message">Welcome to the Comic World!</h2>
            <div className="hero-slide">
                <div className="hero-text">
                    <h1>{slides[currentSlide].title}</h1>
                    <p className="hero-description">{slides[currentSlide].description}</p>
                </div>
                <div className="divider"></div>
                <div className="hero-image">
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="hero-image-img"
                    />
                </div>
            </div>
        </div>
    );
};
