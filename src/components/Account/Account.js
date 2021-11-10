import React from 'react';
import { useAuth } from "../../contexts/AuthContext";
import info from "../../images/info.png";
import {Link, useHistory} from "react-router-dom";

const Account = () => {
    const { currentUser } = useAuth();
    const history = useHistory();

    return (
        <>
            <div>
                <nav className="nav">Your profile</nav>
            </div>
            <section>
                <div>
                    <span>Email:{currentUser.email}</span>
                </div>
                <Link to="/update-profile" className="btn">Update profile</Link>
            </section>
        </>

    );
};

export default Account;