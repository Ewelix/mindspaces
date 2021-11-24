import React, { useState } from 'react';
import "./Navigation.scss";
import user from "../../images/profile.png";
import leave from "../../images/log-out.png";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import info from "../../images/info.png";

const Navigation = () => {
    const [error, setError] = useState('');
    // const { currentUser, logout } = useAuth();
    const { logout } = useAuth();
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
        <nav className="nav">
            <ul className="nav__list">
                <Link to="/account">
                    <img src={user} className="App-logo" alt="logo" />
                </Link>
                {error && <div className="auth__error">
                    <img src={info} alt="Info icon"/>
                    <span>{error}</span>
                </div>}
                <h4 className="nav__title">Collections</h4>
                <a href="/" onClick={handleLogout}>
                    <img src={leave} className="App-logo" alt="logo" />
                </a>
            </ul>
        </nav>
    );
};

export default Navigation;