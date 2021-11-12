import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Set.scss";
import trash from "./../../images/delete.png";
import { db } from "../../firebase";

const Set = ({ match }) => {
    const [cardFronts, setCardFronts] = useState([]);

    useEffect(() => {
        const docRef = db
            .collection("flashcards-collection")
            .doc(match.params.id);

        docRef
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setCardFronts((state) => [
                                ...state,
                                {
                                    ...doc.data(),
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

                {cardFronts.length && cardFronts[0].cards.map((card, i) => {
                    return <div className="collection__single" key={i}>
                                <div className="collection__card">
                                    <img
                                        src={trash}
                                        className="collection__remove"
                                        alt="trash icon" />
                                    <Link to="/add-flashcard">{card.front}</Link>
                                </div>
                            <div className="collection__frame frame"/>
                        </div>
                })}
            </div>
        </>
    );
};

export default Set;