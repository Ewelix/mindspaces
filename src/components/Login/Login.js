import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Login.scss";
import logo from "../../images/flash-cards.png";
import info from "../../images/info.png";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();

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
                    <h2 className="auth__title">Log in</h2>
                    <form action="" className="login" onSubmit={handleSubmit}>
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

                        {error && <div className="auth__error">
                            <img src={info} alt="Info icon"/>
                            <span>{error}</span>
                        </div>}
                        <button disabled={loading} className="btn btn--lg">Log in</button>
                    </form>
                    <div>Need an account? <Link to="/signup">Sign up</Link></div>
                </div>
            </div>
        </>
    );
};

export default Login;