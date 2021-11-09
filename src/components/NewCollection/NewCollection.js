import React from 'react';
import "./NewCollection.scss";

const NewCollection = () => {
    return (
        <div>
            <nav className="nav">
                <ul className="nav__list">
                    <li>X</li>
                    <li className="title">New collection</li>
                    <li className="ok">OK</li>
                </ul>
            </nav>
            <form className="form">
                <div className="form__intro">
                    <input type="text" id="collection-title"/>
                    <label htmlFor="collection-title">Nazwa zestawu</label>
                </div>
                <div className="form__card">
                    <div className="form__row">
                        <input type="text" id="collection-title" className="form__concept"/>
                        <label htmlFor="collection-title">concept</label>
                    </div>
                    <div className="form__row">
                        <input type="text" id="collection-title" className="form__concept"/>
                        <label htmlFor="collection-title">definition</label>
                    </div>
                </div>
                <a href="#" className="form__add btn btn--lg">Add a new card</a>
            </form>
        </div>
    );
};

export default NewCollection;