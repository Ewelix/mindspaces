import React from 'react';
import "./Account.scss";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import arrow from "../../images/left-arrow.png";
import close from "../../images/close.png";

const Account = () => {
    const { currentUser } = useAuth();

    return (
        <>
            <div>
                <nav className="nav">
                    <h4>Your profile</h4>
                    <Link to="/"><img src={close} alt="Info icon"/></Link>
                </nav>
            </div>
            <section className="account">
                <div className="account__title">Profile details</div>
                <div className="account__content">
                    <strong>Email: </strong>
                    {currentUser.email}
                </div>
                <Link to="/update-profile" className="account__btn btn">Update profile</Link>
            </section>
        </>
    );
};

export default Account;