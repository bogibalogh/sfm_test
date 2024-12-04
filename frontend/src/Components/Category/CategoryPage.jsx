import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.css'

export const CategoryPage = () => {
    const { category } = useParams(); // URL-ből olvassa a kategóriát
    const [comics, setComics] = useState([]);

    useEffect(() => {
        // Dinamikus adatok betöltése az adott kategóriához
        const fetchComics = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/comics/${category}`);
                const data = await response.json();
                setComics(data);
            } catch (error) {
                console.error('Error fetching comics:', error);
            }
        };

        fetchComics();
    }, [category]);

    return (
        <div>
            <h1>{category.charAt(0).toUpperCase() + category.slice(1)} Comics</h1>
            <div className="comics-list">
                {comics.length > 0 ? (
                    comics.map((comic) => (
                        <div key={comic.id} className="comic-item">
                            <img src={comic.imageUrl} alt={comic.title} />
                            <h2>{comic.title}</h2>
                            <p>{comic.description}</p>
                            <p>Price: ${comic.price}</p>
                        </div>
                    ))
                ) : (
                    <p>No comics available in this category.</p>
                )}
            </div>
        </div>
    );
};
