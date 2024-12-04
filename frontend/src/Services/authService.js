import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth'; // Backend URL

// Login request
export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || 'Login failed');
    }
};

// Register request
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data || 'Registration failed');
    }

    

};
