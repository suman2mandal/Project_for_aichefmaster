// components/Logout.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        // Perform logout logic
        dispatch(logout());
    };

    return (
        <div>
            <h2>Logout Page</h2>
            <p>Are you sure you want to logout?</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
