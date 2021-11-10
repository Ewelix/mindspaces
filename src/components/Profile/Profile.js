import React, { useRef, useState } from 'react';
import { useAuth } from "../../contexts/AuthContext";
import info from "../../images/info.png";
import { Link, useHistory } from "react-router-dom";

const Profile = () => {
    return (
        <>
            <div>
                <nav className="nav">Your profile</nav>
            </div>
        </>

    );
};

export default Profile;