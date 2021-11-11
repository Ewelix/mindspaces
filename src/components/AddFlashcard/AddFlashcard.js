import React from 'react';
import {Link} from "react-router-dom";
import arrow from "../../images/left-arrow.png";
import "./AddFlashcard.scss";

const AddFlashcard = () => {
    return (
        <>
            <nav className="nav">
                <ul className="nav__list">
                    <Link to="/"><img src={arrow} alt="Info icon"/></Link>
                    <li className="title">New Flashcard</li>

                </ul>
            </nav>
            <form className="form form__card">
                <div className="form__container">
                    <div className="form__row">
                        <input
                            type="text"
                            id="collection-concept"
                            className="form__concept"/>
                        <label htmlFor="collection-concept">concept</label>
                    </div>
                    <div className="form__row">
                        <input type="text" id="collection-definition" className="form__concept"/>
                        <label htmlFor="collection-definition">definition</label>
                    </div>
                </div>
                <button className="form__add btn btn--lg">Save card</button>
            </form>

        </>
    );
};

export default AddFlashcard;