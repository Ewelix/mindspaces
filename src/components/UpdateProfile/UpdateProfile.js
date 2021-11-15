import React, { useRef, useState } from 'react';
import { useAuth } from "../../contexts/AuthContext";
import info from "../../images/info.png";
import { Link, useHistory } from "react-router-dom";

const UpdateProfile = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const passwordConfirmRef = useRef('');
    const { currentUser, updateEmail, updatePassword } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        const promises = [];
        setLoading(true);
        setError("");

        if(emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        if(passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => {
                history.push("/account");
            })
            .catch(() => {
                setError("Failed to update account");
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <>
            <div className="auth">
                <div className="auth__signup">
                    <h2 className="auth__title">Update Profile</h2>
                    <form action="" className="signup" onSubmit={handleSubmit}>
                        <div className="signup__group">
                            <label htmlFor="signupEmail">E-mail address</label>
                            <input type="email"
                                   id="signupEmail"
                                   placeholder="E-mail address"
                                   ref={emailRef}
                                   defaultValue={currentUser.email}
                                   required/>
                        </div>
                        <div className="signup__group">
                            <label htmlFor="signupPassword">Password</label>
                            <input type="password"
                                   id="signupPassword"
                                   placeholder="Leave blank to keep the same"
                                   ref={passwordRef}/>
                        </div>
                        <div className="signup__group">
                            <label htmlFor="signupConfirmPassword">Password Confirmation</label>
                            <input
                                type="password"
                                id="signupConfirmPassword"
                                placeholder="Leave blank to keep the same"
                                ref={passwordConfirmRef}/>
                        </div>
                        {error && <div className="auth__error">
                            <img src={info} alt="Info icon"/>
                            <span>{error}</span>
                        </div>}
                        <button disabled={loading} className="btn btn--lg">Update</button>
                    </form>
                    <Link to="/account" className="auth__link">Cancel</Link>
                </div>
            </div>
        </>
    );
};

export default UpdateProfile;