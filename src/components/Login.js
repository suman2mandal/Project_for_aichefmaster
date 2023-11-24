// components/Login.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        // Perform authentication logic
        dispatch(login());
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
