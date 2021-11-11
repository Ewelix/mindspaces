import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Collections.scss";
import trash from "./../../images/delete.png";
import  { db } from "../../firebase";

const Collections = () => {
    const [cardTitles, setCardTitles] = useState([]);

    useEffect(() => {
        db.collection("flashcards-collection").onSnapshot((snapshot) => {
            setCardTitles(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    title: doc.data().title
                }))

            );
        });
    }, []);

    return (
        <>
            <div className="collection">
                    <div className="collection__single">
                        <div className="collection__card collection__card--add">
                            Add a new collection
                            <Link to="/new-collection" className="collection__add">+</Link>
                        </div>
                    </div>

                {cardTitles.map(cardTitle => {
                    return <div className="collection__single" key={cardTitle.id}>
                                <div className="collection__card">
                                    <img src={trash} className="collection__remove" alt="trash icon" />
                                    <span>{cardTitle.title}</span>
                                </div>
                            <div className="collection__frame frame"/>
                        </div>
                    })}
            </div>
        </>
    );
};

export default Collections;