import React, { useEffect, useState } from 'react';
import './Cart.css';
import { getCartItems, removeFromCart } from '../../Services/cartService';

export const Cart = () =>{  const [cartItems, setCartItems] = useState([]);

useEffect(() => {
    const fetchCartItems = async () => {
        const items = await getCartItems();
        setCartItems(items);
    };
    fetchCartItems();
}, []);

const handleRemove = async (itemId) => {
    await removeFromCart(itemId);
    setCartItems(cartItems.filter((item) => item.id !== itemId));
};

if (cartItems.length === 0) {
    return <div className="cart-empty">Your cart is empty.</div>;
}

return (
    <div className="cart">
        <h2>Your Cart</h2>
        <ul>
            {cartItems.map((item) => (
                <li key={item.id}>
                    <div className="cart-item">
                        <img src={item.picture} alt={item.title} />
                        <div>
                            <h4>{item.title}</h4>
                            <p>Price: ${item.price}</p>
                        </div>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </li>
            ))}
        </ul>
        <button className="checkout-button">Proceed to Checkout</button>
    </div>
);
};

