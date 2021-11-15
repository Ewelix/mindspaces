import React from 'react';
import "./Learning.scss";
import { Link } from "react-router-dom";
import close from "../../images/close-orange.png";

const Learning = ({ match }) => {
    return (
        <>
            <div className="learning">
                <nav className="learning__nav nav">
                    <ul className="nav__list">
                        <Link to={`/set/${match.params.id}`}><img src={close} alt="Close icon"/></Link>
                        <li className="title">12/23</li>
                    </ul>
                </nav>
                <div className="learning__set">
                    <div className="learning__single">
                        <div className="learning__card">
                            <div className="learning__counter">12/23</div>
                            <div className="learning__content">Hi</div>
                        </div>
                        <div className="learning__frame frame"/>
                    </div>
                    <div className="learning__buttons">
                        <a href="#" className="learning__button">needs practice</a>
                        <a href="#" className="learning__button">learned</a>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Learning;