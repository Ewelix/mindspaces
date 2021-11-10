import React, { useState } from 'react';
import Collections from "../Collections/Collections";
import Navigation from "../Navigation/Navigation";
import "./Dashboard.scss";

const Dashboard = () => {
    return (
        <>
            <Navigation/>
            <Collections/>
        </>
    );
};

export default Dashboard;