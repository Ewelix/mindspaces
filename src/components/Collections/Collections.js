import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Collections.scss";
import trash from "./../../images/delete.png";
import  { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

const Collections = () => {
    const [cardTitles, setCardTitles] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        db
            .collection("flashcards-collection")
            .where('userId', '==', currentUser.uid)
            .onSnapshot((snapshot) => {
                setCardTitles(
                    snapshot.docs.map((doc) => ({
                        id: doc.id,
                        title: doc.data().title,
                    }))
                );
        });
    }, []);

    const handleRemove = (id) => {
        db
            .collection("flashcards-collection")
            .doc(id)
            .delete()
            .then(function () {console.log("Value successfully remove!");})
            .catch(function (error) {console.error("Error removing Value: ", error);});
    }

    return (
        <div className="collections">
            <div className="collection">
                    <div className="collection__single">
                        <div className="collection__card collection__card--add">
                            Add a new collection
                            <Link to="/new-collection" className="collection__add">&#43;</Link>
                        </div>
                    </div>

                {cardTitles.length > 0 && cardTitles.map(cardTitle => {
                    return <div className="collection__single" key={cardTitle.id}>
                                <div className="collection__card">
                                    <img
                                        src={trash}
                                        className="collection__remove"
                                        onClick={() => handleRemove(cardTitle.id)} alt="trash icon" />
                                    <Link to={`/set/${cardTitle.id}`} className="collection__title">{cardTitle.title}</Link>
                                </div>
                            <div className="collection__frame frame"/>
                        </div>
                    })}
            </div>
        </div>
    );
};

export default Collections;