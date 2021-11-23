import React, { useRef, useState } from 'react';
import { useAuth } from "../../contexts/AuthContext";
import "./Signup.scss";
import info from "../../images/info.png";
// import card from "../../images/flash-card.png";
import card from "../../images/flash-card(2).png";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError('Failed to create an account')
        }
        setLoading(false);
    }

    return (
        <>
            <div className="auth">
                <img className="auth__img" src={card} alt=""/>
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
                        <button disabled={loading} className="auth__btn btn btn--lg">Sign up</button>
                    </form>
                    <div className="auth__footer">Already have an account? <Link to="/login" className="auth__link link">Log in</Link></div>
                </div>
            </div>
        </>
    );
};

export default Signup;