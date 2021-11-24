import React, { useState, useEffect } from 'react';
import { Link, useHistory,  } from "react-router-dom";
import arrow from "../../images/left-arrow.png";
import "./AddFlashcard.scss";
import { db } from "../../firebase";
import 'firebase/firestore';
import firebase from "firebase";

const AddFlashcard = ( {match}) => {
    const [fronts, setFronts] = useState([]);
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const docRef =
            db
            .collection("flashcards-collection")
            .doc(match.params.id);

        docRef.update({
            cards: firebase.firestore.FieldValue.arrayUnion({front, back})
        })
            .then(function () {
                console.log("Value successfully written!");
                setFronts((state) => [
                    ...state,
                    ...front
                ])
            })
            .catch(function (error) {console.error("Error writing Value: ", error);});

        setFront("");
        setBack("");
        history.push(`/set/${match.params.id}`);
    }

    return (
        <div className="add-container">
            <nav className="nav">
                <ul className="nav__list">
                    <Link to={`/set/${match.params.id}`}><img src={arrow} alt="Info icon"/></Link>
                    <li className="title">New Flashcard</li>
                </ul>
            </nav>
            <form className="form form__card" onSubmit={handleSubmit}>
                <h5 className="form__title">Add a new flashcard</h5>
                <div className="form__container">
                    <div className="form__row">
                        <input
                            type="text"
                            id="collection-concept"
                            className="form__concept"
                            onChange={(e) => setFront(e.target.value)}
                            />
                        <label htmlFor="collection-concept">front</label>
                    </div>
                    <div className="form__row">
                        <input
                            type="text"
                            id="collection-definition"
                            className="form__concept"
                            onChange={(e) => setBack(e.target.value)}
                        />
                        <label htmlFor="collection-definition">back</label>
                    </div>
                </div>
                <button className="form__add btn btn--lg">Save</button>
            </form>
        </div>
    );
};

export default AddFlashcard;