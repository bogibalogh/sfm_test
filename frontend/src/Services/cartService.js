import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/cart';

export const getCartItems = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cart items:', error);
        return [];
    }
};

export const removeFromCart = async (itemId) => {
    try {
        await axios.delete(`${API_BASE_URL}/remove/${itemId}`);
    } catch (error) {
        console.error('Error removing item from cart:', error);
    }
};
