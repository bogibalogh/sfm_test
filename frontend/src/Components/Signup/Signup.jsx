import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../../Services/authService'; // Import functions for login and register
import './Signup.css';

export const Signup = () => {
    const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
    const [formData, setFormData] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        dateOfBirth: '',
        gender: '',
        country: '',
        registrationDate: '',
    });

    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({
                email: formData.email,
                password: formData.password,
            });
            setMessage(`Login successful: ${response}`);
            // Irányítás másik oldalra, ha szükséges
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            setMessage(`Registration successful: ${response}`);
            setIsLogin(true); // Vissza a bejelentkezéshez sikeres regisztráció után
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="auth-container">
            {isLogin ? (
                <div className="login-form">
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                        <button type="submit">Sign In</button>
                    </form>
                    <p>
                        Don't have an account?{' '}
                        <span onClick={() => setIsLogin(false)} className="switch-link">
                            Register here
                        </span>
                    </p>
                </div>
            ) : (
                <div className="register-form">
                    <h2>Register</h2>
                    <form onSubmit={handleRegister}>
                    <div>UserName</div>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            required
                        />
                         <div>Name</div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                        />
                         <div>E-mail</div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            required
                        />
                         <div>Password</div>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                        <div>Date of Birth</div>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />

                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <div>Country</div>
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Country"
                            required
                        />
                        <button type="submit">Register</button>
                    </form>
                    <p>
                        Already have an account?{' '}
                        <span onClick={() => setIsLogin(true)} className="switch-link">
                            Login here
                        </span>
                    </p>
                </div>
            )}

            {message && <p className="auth-message">{message}</p>}
        </div>
    
    );
};