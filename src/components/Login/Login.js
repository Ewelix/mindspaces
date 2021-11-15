import React, { useRef, useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Login.scss";
import info from "../../images/info.png";

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            console.log(error);
            setError('Failed to log in')
        }
        setLoading(false);
    }

    return (
        <>
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
                        <Link to="/forgot-password" className="auth__reminder">Forgot Password?</Link>
                        <button disabled={loading} className="btn btn--lg">Log in</button>
                    </form>
                    <div className="auth__footer">Need an account? <Link to="/signup" className="auth__link">Sign up</Link></div>
                </div>
            </div>
        </>
    );
};

export default Login;