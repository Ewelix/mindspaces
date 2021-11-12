import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Set.scss";
import trash from "./../../images/delete.png";
import { db } from "../../firebase";

const Set = ({ match }) => {
    const [cardFronts, setCardFronts] = useState([]);

    useEffect(() => {
        const docRef = db.collection("flashcards-collection").doc(match.params.id);

        docRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    setCardFronts((state) => [
                                ...state,
                                {
                                    ...doc.data(),
                                    id: doc.id
                                }
                            ])
                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, []);

    return (
        <>
            <div className="collection">
                <div className="collection__single">
                    <div className="collection__card collection__card--add">
                        Add a new flashcard
                        <Link to={`/add-flashcard/${match.params.id}`} className="collection__add">+</Link>
                    </div>
                </div>

                {cardFronts.map(cardFront => {
                    return <div className="collection__single">
                                <div className="collection__card">
                                    <img
                                        src={trash}
                                        className="collection__remove"
                                        alt="trash icon" />
                                    <Link to="/add-flashcard">{cardFront.cards.card.front}</Link>
                                </div>
                            <div className="collection__frame frame"/>
                        </div>
                })}
            </div>
        </>
    );
};

export default Set;