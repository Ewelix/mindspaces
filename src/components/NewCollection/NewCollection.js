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

    const [error, setError] =useState('');

    const history = useHistory();


    const handleClick = () => {
        console.log('klik');
        // return <Card/>
    //    1. wyslanie danych do cards
    //    2. wyswietlenie nowej czystej karty
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (collectionTitle === "") return;

        // wysylam dane

        db.collection("flashcards-collection")
            .add({
                title: collectionTitle,
                cards: []
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
                        value={collectionTitle}
                        onChange={(e) => setCollectionTitle(e.target.value)}/>
                    <label htmlFor="collection-title">Set title</label>
                </div>

                <button className="ok btn btn--lg" type="submit" on>Save </button>
            </form>
        </div>
    );
};

export default NewCollection;