import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import info from "../../images/info.png";
import check from "../../images/check.png";

const ForgotPassword = () => {
    const emailRef = useRef('');
    const { passwordReset } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setMessage('');
            setError('');
            setLoading(true);
            await passwordReset(emailRef.current.value);
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false);
    }

    return (
        <>
            <div className="auth">
                <div className="auth__signin">
                    <h2 className="auth__title">Password Reset</h2>
                    <form action="" className="login" onSubmit={handleSubmit}>
                        <div className="signup__group">
                            <label htmlFor="signupEmail">E-mail address</label>
                            <input type="email"
                                   id="signupEmail"
                                   placeholder="E-mail address"
                                   ref={emailRef}
                                   required/>
                        </div>

                        {error && <div className="auth__error">
                            <img src={info} alt="Info icon"/>
                            <span>{error}</span>
                        </div>}
                        {message && <div className="auth__success">
                            <img src={check} alt="Check icon"/>
                            <span>{message}</span>
                        </div>}
                        <button disabled={loading} className="btn btn--lg">Reset Password</button>
                    </form>
                    <Link to="/login">Log in</Link>
                    <div>Need an account? <Link to="/signup">Sign up</Link></div>
                </div>
            </div>
        </>
    );
};

export default ForgotPassword;