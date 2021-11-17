import React, { useState } from 'react';
import "./Learning.scss";
import { Link } from "react-router-dom";
import close from "../../images/close-orange.png";
import arrow from "../../images/again-arrow.png";
import check from "../../images/check(2).png";
import Flashcard from "../Flashcard/Flashcard";

const Learning = ({ match, location }) => {
    const [flashcards, setFlashcards] = useState(location.state.flashcards);
    const [cardReverse, setCardReverse] = useState(false);
    const [currentCard, setCurrentCard] = useState(1);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [needsPracticeCategory, setNeedsPracticeCategory] = useState([]);

    const handleClick = () => {
        if (currentCard === flashcards.length) return;
        setCurrentCard(previousState => previousState + 1);
        setCurrentCardIndex(previousState => previousState + 1);
    }

    const handleAgainClick = (e) => {
        e.preventDefault();
        handleClick();
        setNeedsPracticeCategory((previousState) => (
            [...previousState, flashcards[currentCardIndex]]
        ))
    }

    // console.log(needsPracticeCategory);

    const handleSuccessClick = (e) => {
        e.preventDefault();
        handleClick();
    }

    return (
        <>
            <div className="learning">
                <nav className="learning__nav nav">
                    <ul className="nav__list">
                        <Link to={`/set/${match.params.id}`}>
                            <img src={close} alt="Close icon"/>
                        </Link>
                        <li className="title">Learning</li>
                    </ul>
                </nav>
                <div className="learning__set">
                    <p className="learning__instruction">Tap card to flip it!</p>
                    <div className="learning__single">
                        <div className={`learning__card ${cardReverse ? 'reverse' : ''}`}
                             onClick={() => setCardReverse(!cardReverse)}>
                            <div className="learning__counter">{currentCard > 0 ? currentCard : ''}/{flashcards.length}</div>
                            {flashcards.length && <Flashcard flashcard={flashcards[currentCardIndex]}/>}
                            {/*{currentCard === 0 && <h5>Congrats! You already know everything!</h5>}*/}
                        </div>
                        <div className="learning__frame frame"/>
                    </div>
                    <div className="learning__buttons">
                        {/*needs practice learned*/}
                        <a href="#"
                           className="learning__button"
                            onClick={handleAgainClick}>
                            <img src={arrow} alt=""/>
                        </a>
                        <a href="#"
                           className="learning__button"
                           onClick={handleSuccessClick}>
                            <img src={check} alt=""/>
                            </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Learning;