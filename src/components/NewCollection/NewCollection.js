import React, { useState } from 'react';
import "./NewCollection.scss";
import { Link, useHistory } from "react-router-dom";
import arrow from "../../images/left-arrow.png";
import  { db } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";

const NewCollection = () => {
    const [collectionTitle, setCollectionTitle] = useState('');
    const { currentUser } = useAuth();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (collectionTitle === "") return;

        db.collection("flashcards-collection")
            .add({
                title: collectionTitle,
                cards: [],
                userId: currentUser.uid,
        })
            .then(function () {console.log("Value successfully written!");})
            .catch(function (error) {console.error("Error writing Value: ", error);});

        setCollectionTitle("");
        history.push("/");
    }

    return (
        <>
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

                <button className="ok btn btn--lg" type="submit">Save</button>
            </form>
        </>
    );
};

export default NewCollection;