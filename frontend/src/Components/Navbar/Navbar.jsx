import React, { useState } from 'react';
import './Navbar.css';
import cart_logo from '../Assets/cart_logo.png';
import profil from '../Assets/profil_icon.png';
import searchIcon from '../Assets/search_button.jpg';
import { Link } from 'react-router-dom';
import menu from '../Assets/menu.webp';

export const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleMenu = () => {
        setMenuVisible((prevVisible) => !prevVisible);
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log("Keresési kifejezés: ", searchQuery); // A keresési kifejezés itt kezelhető
        // Itt hívhatjuk meg a keresési logikát vagy navigálhatunk egy keresési oldalra
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <h2>
                    <Link to="/">Comic Shop</Link>
                </h2>
            </div>

            <div className='nav-menu'>
                <button className='menu-button' onClick={toggleMenu}>
                    <img src={menu} alt="Menu" />
                </button>
                {menuVisible && ( 
                    <ul className='menu-list'>
                        <li><Link to="/category/all-comic">All Comics</Link></li>
                        <li><Link to="/category/sci-fi">Sci-fi</Link></li>
                        <li><Link to="/category/superhero">Super Hero</Link></li>
                        <li><Link to="/category/manga">Manga</Link></li>
                        <li><Link to="/category/horror">Horror</Link></li>
                        <li><Link to="/category/hungarian">Hungarian</Link></li>
                    </ul>
                )}
            </div>

            <div className='nav-search'>
                <form onSubmit={handleSearchSubmit}>
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <button type="submit" className="search-button">
                        <img src={searchIcon} alt="Search" />
                    </button>
                </form>
            </div>

            <div className='nav-login-cart'>
                <button>
                    <Link to={'/login'}>
                        <img src={profil} alt="Profile" />
                    </Link>
                </button>
                <Link to={'/cart'}>
                    <img src={cart_logo} alt="Cart" />
                </Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};
