// components/Header.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.isAuthenticated);

    const handleLogout = () => {
        // Perform logout logic
        dispatch(logout());
    };

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    {isAuthenticated && <li><button onClick={handleLogout}>Logout</button></li>}
                </ul>
            </nav>
        </div>
    );
};

export default Header;
