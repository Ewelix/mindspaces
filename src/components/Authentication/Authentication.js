import "./Authentication.scss";
import logo from "../../images/flash-cards.png";

import React, { useRef } from 'react';

const Authentication = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <div className="auth">
                <div className="auth__signin">
                    <h2 className="auth__title">Witaj ponownie</h2>
                    <form action="">
                        <input type="email" placeholder="E-mail" ref={emailRef} required/>
                        <input type="password" placeholder="Password" ref={passwordRef} required/>
                        <button className="btn btn--lg">Log in</button>
                    </form>
                    <a href="#">Zapomniałeś hasła?</a>
                </div>
                <div className="auth__signup">
                    <h2 className="auth__title">Sign up</h2>
                    <form action="" className="signup">
                        <div className="signup__group">
                            <label htmlFor="signupEmail">E-mail address</label>
                            <input type="email" id="signupEmail" placeholder="E-mail address" ref={emailRef} required/>
                        </div>
                        <div className="signup__group">
                            <label htmlFor="signupPassword">Password</label>
                            <input type="password" id="signupPassword" placeholder="Password" ref={passwordRef} required/>
                        </div>
                        <div className="signup__group">
                            <label htmlFor="signupConfirmPassword">Password Confirmation</label>
                            <input type="password" id="signupConfirmPassword" placeholder="Password Confirmation" ref={passwordConfirmRef} required/>
                        </div>


                        <button className="btn btn--lg">Sign up</button>
                    </form>
                    <a href="#">Already have an account? Log in</a>
                </div>
            </div>
        </>
    );
};

export default Authentication;