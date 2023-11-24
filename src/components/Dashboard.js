// components/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Dashboard = () => {
    const isAuthenticated = useSelector((state) => state.isAuthenticated);

    if (!isAuthenticated) {
        return <Redirect to="/login" />;
    }

    return (
        <div>
            <h2>Dashboard Page</h2>
            {/* Your secured content here */}
        </div>
    );
};

export default Dashboard;
