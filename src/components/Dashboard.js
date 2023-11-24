// components/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return (
        <div>
            <h2>Dashboard Page</h2>
            {/* Your secured content here */}
        </div>
    );
};

export default Dashboard;
