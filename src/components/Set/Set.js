import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import 'firebase/firestore';
import firebase from "firebase";
import "./Set.scss";
import trash from "./../../images/delete.png";
import arrow from "../../images/left-arrow.png";
import Flashcard from "../Flashcard/Flashcard";

const Set = ({ match }) => {
    const [cardFronts, setCardFronts] = useState([]);
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');
    const [flashcards, setFlashcards] = useState([]);

    const docRef = db
        .collection("flashcards-collection")
        .doc(match.params.id);

    useEffect(() => {
        docRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setFlashcards((state) => [
                            ...state, ...doc.data().cards
                            ])
                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);

    const handleRemove = (id) => {
        docRef.update({
            cards: firebase.firestore.FieldValue.arrayRemove()
        })
            .then(function () {
                console.log("Value successfully written!");
            })
            .catch(function (error) {console.error("Error writing Value: ", error);});
    }

    return (
        <>
            <nav className="nav">
                <ul className="nav__list">
                    <Link to="/"><img src={arrow} alt="Info icon"/></Link>
                    <Link
                        to={{
                        pathname: `/learning/${match.params.id}`,
                        state: {
                            flashcards: flashcards
                        }
                    }}
                        className="nav__button" flashcards={flashcards}>Start learning</Link>
                </ul>
            </nav>
            <div className="collection">
                <div className="collection__single">
                    <div className="collection__card collection__card--add">
                        Add a new flashcard
                        <Link to={`/add-flashcard/${match.params.id}`} className="collection__add">&#43;</Link>
                    </div>
                </div>

                {flashcards.length > 0 && flashcards.map((flashcard, i) => {
                    return <div className="collection__single" key={i}>
                                <div className="collection__card">
                                    <img
                                        src={trash}
                                        className="collection__remove"
                                        alt="trash icon"
                                        onClick={() => handleRemove(i)}/>
                                    <div className="collection__title">
                                        <Flashcard flashcard={flashcard}/>
                                    </div>
                                </div>
                            <div className="collection__frame frame"/>
                        </div>
                })}
            </div>
        </>
    );
};

export default Set;