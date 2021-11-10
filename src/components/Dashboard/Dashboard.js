import React, { useState } from 'react';
import Collections from "../Collections/Collections";
import "./Dashboard.scss";
import user from "../../images/user.png";
import leave from "../../images/log-out.png";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import info from "../../images/info.png";


const Dashboard = () => {
    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();

    const handleLogout = async () => {
        setError('');

        try {
            await logout();
            history.push("/login")
        } catch {
            setError('Fail to log out')
        }
    }

    return (
        <>
            <nav className="nav">
                <img src={user} className="App-logo" alt="logo" />
                {error && <div className="auth__error">
                    <img src={info} alt="Info icon"/>
                    <span>{error}</span>
                </div>}
                <h4>{currentUser.email}</h4>
                {/*<h1 className="nav__title title">Your collections</h1>*/}
                <a href="/" onClick={handleLogout}>
                    <img src={leave} className="App-logo" alt="logo" />
                </a>
            </nav>
            <Collections/>
        </>
    );
};

export default Dashboard;