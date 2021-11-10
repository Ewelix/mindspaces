import React, { useState } from 'react';
import Collections from "../Collections/Collections";
import "./Dashboard.scss";
import user from "../../images/user.png";
import logout from "../../images/log-out.png";
import { useAuth } from "../../contexts/AuthContext";


const Dashboard = () => {
    // const [error, setError] = useState("");
    const { currentUser } = useAuth();

    return (
        <>
            <nav className="nav">
                <img src={user} className="App-logo" alt="logo" />
                <h4>{currentUser.email}</h4>
                {/*<h1 className="nav__title title">Your collections</h1>*/}
                <img src={logout} className="App-logo" alt="logo" />
                {/*<a href="">Log out</a>*/}
            </nav>
            <Collections/>
        </>
    );
};

export default Dashboard;