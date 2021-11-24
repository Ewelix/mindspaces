import React from 'react';
import Collections from "../Collections/Collections";
import Navigation from "../Navigation/Navigation";
import "./Dashboard.scss";

const Dashboard = () => {
    return (
        <div className="collections-wrapper">
            <Navigation/>
            <Collections/>
        </div>
    );
};

export default Dashboard;