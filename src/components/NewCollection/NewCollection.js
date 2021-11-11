import React, { useState } from 'react';
import "./NewCollection.scss";
import { Link, useHistory } from "react-router-dom";
import arrow from "../../images/left-arrow.png";
import  { db } from "../../firebase";

const NewCollection = () => {
    const [collectionTitle, setCollectionTitle] = useState('');

    //pojedyncza karta
    const [card, setCard] = useState({});

    // cala kolekcja
    const [cards, setCards] = useState([]);

    const history = useHistory();


    const handleClick = () => {
        console.log('klik');
    //    1. wyslanie danych do cards
    //    2. wyswietlenie nowej czystej karty
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // wysylam dane

        db.collection("flashcards-collection")
            .add({
            title: collectionTitle,
        })
            .then(function () {console.log("Value successfully written!");})
            .catch(function (error) {console.error("Error writing Value: ", error);});

        setCollectionTitle("");
        history.push("/");

    //    wyswietlanie nowej karty
    }

    return (
        <div>
            <nav className="nav">
                <ul className="nav__list">
                    <Link to="/"><img src={arrow} alt="Info icon"/></Link>
                    <li className="title">New collection</li>

                </ul>
            </nav>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form__intro">
                    <input
                        type="text"
                        id="collection-title"
                        placeholder="Nazwa zestawu"
                        value={collectionTitle}
                        onChange={(e) => setCollectionTitle(e.target.value)}/>
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
                {/* po kliku karta laduje w cards array */}
                <a className="form__add btn btn--lg" onClick={handleClick}>Add a new card</a>
                <button className="ok" type="submit" on>OK</button>
            </form>
        </div>
    );
};

export default NewCollection;