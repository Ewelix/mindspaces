import React from 'react';
import "./Collections.scss";
import logo from "./../../images/flash-cards.png";
import trash from "./../../images/trash.png";

const Collections = () => {

    // const handleClick = () => {
    //     console.log('klik');
    // }

    return (
        <>
            <nav className="nav">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="nav__title title">Your collections</h1>
            </nav>
            <div className="collection">
                    <div className="collection__single">
                        <div className="collection__card collection__card--add">Add a new collection
                            <a href="/" className="collection__add">+</a>
                        </div>
                    </div>
                    <div className="collection__single">
                        <div className="collection__card">
                            <img src={trash} className="collection__remove" alt="trash icon" />
                            <span>React</span>
                        </div>
                        <div className="collection__frame"/>
                    </div>
                    <div className="collection__single">
                        <div className="collection__card">
                            <img src={trash} className="collection__remove" alt="trash icon" />
                            <span>Sass</span>
                        </div>
                        <div className="collection__frame"/>
                    </div>
            </div>
        </>
    );
};

export default Collections;