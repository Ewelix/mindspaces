import React, { useRef, useState } from 'react';
import { useAuth } from "../../contexts/AuthContext";
import "./Signup.scss";
import logo from "../../images/flash-cards.png";
import info from "../../images/info.png";

const Signup = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const passwordConfirmRef = useRef('');
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch {
            console.log(error);
            setError('Failed to create an account')
        }
        setLoading(false);
    }

    return (
        <>
            <img src={logo} className="App-logo" alt="logo" />
            <div className="auth">
                <div className="auth__signin">
                    <h2 className="auth__title">Witaj ponownie</h2>
                    <form action="">
                        <input type="email" placeholder="E-mail" required/>
                        <input type="password" placeholder="Password" required/>
                        <button className="btn btn--lg">Log in</button>
                    </form>
                    <a href="/">Zapomniałeś hasła?</a>
                </div>
                <div className="auth__signup">
                    <h2 className="auth__title">Sign up</h2>
                    <form action="" className="signup" onSubmit={handleSubmit}>
                        <div className="signup__group">
                            <label htmlFor="signupEmail">E-mail address</label>
                            <input type="email"
                                   id="signupEmail"
                                   placeholder="E-mail address"
                                   ref={emailRef}
                                   required/>
                        </div>
                        <div className="signup__group">
                            <label htmlFor="signupPassword">Password</label>
                            <input type="password"
                                   id="signupPassword"
                                   placeholder="Password"
                                   ref={passwordRef}
                                   required/>
                        </div>
                        <div className="signup__group">
                            <label htmlFor="signupConfirmPassword">Password Confirmation</label>
                            <input
                                type="password"
                                id="signupConfirmPassword"
                                placeholder="Password Confirmation"
                                ref={passwordConfirmRef}
                                required/>
                        </div>
                        {error && <div className="auth__error">
                            <img src={info} alt="Info icon"/>
                            <span>{error}</span>
                        </div>}
                        <button disabled={loading} className="btn btn--lg">Sign up</button>
                    </form>
                    <a href="/">Already have an account? Log in</a>
                </div>
            </div>
        </>
    );
};

export default Signup;