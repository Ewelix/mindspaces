import React from 'react';
import "./Account.scss";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import close from "../../images/close-orange.png";
import user from "../../images/profile.png";

const Account = () => {
    const { currentUser } = useAuth();

    return (
        <>
            <div className="account">
                <nav className="nav">
                    <ul className="nav__list">
                        <Link to="/account">
                            <img src={user} alt="User icon" />
                        </Link>
                        <h4 className="nav__title">Account</h4>
                        <Link to="/"><img src={close} alt="Info icon"/></Link>
                    </ul>
                </nav>
                <section className="account__wrapper">
                    <div className="account__container">
                        <div className="account__title">Profile details</div>
                        <div className="account__content">
                            <strong>Email: </strong>
                            {currentUser.email}
                        </div>
                        <Link to="/update-profile" className="account__btn btn">Update profile</Link>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Account;