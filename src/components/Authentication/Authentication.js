import "./Authentication.scss";
import logo from "../../images/flash-cards.png";

import React from 'react';

const Authentication = () => {
    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <div className="auth">
                <div>
                    <h2 className="auth__title">Witaj ponownie</h2>
                    <form action="">
                        <input type="text" placeholder="Username"/>
                        <input type="password" placeholder="Password"/>
                        <button className="btn btn--lg">Log in</button>
                    </form>
                    <a href="#">Zapomniałeś hasła?</a>
                </div>
                <div className="auth__register">
                    <h2 className="auth__title">Jestem tu pierwszy raz</h2>
                    <button className="btn btn__register btn--lg">Sign up</button>
                    <form action="" className="auth__logging">
                        <input type="text"/>
                        <input type="email"/>
                        <input type="password"/>
                        <button className="btn">Sign up</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Authentication;