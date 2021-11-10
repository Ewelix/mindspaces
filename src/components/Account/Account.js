import React from 'react';
import "./Account.scss";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import close from "../../images/close.png";
import user from "../../images/user.png";

const Account = () => {
    const { currentUser } = useAuth();

    return (
        <>
            <nav className="nav">
                <Link to="/account">
                    <img src={user} alt="User icon" />
                </Link>
                <h4 className="nav__title">Account</h4>
                <Link to="/"><img src={close} alt="Info icon"/></Link>
            </nav>
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