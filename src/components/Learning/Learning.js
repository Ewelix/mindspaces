import React, { useState } from 'react';
import "./Learning.scss";
import { Link } from "react-router-dom";
import close from "../../images/close-orange.png";
import arrow from "../../images/again-arrow.png";
import check from "../../images/check(2).png";
import Flashcard from "../Flashcard/Flashcard";
import FinishedSetInfo from "../FinishedSetInfo/FinishedSetInfo";

const Learning = ({ match, location }) => {
    const [flashcards, setFlashcards] = useState(location.state.flashcards);
    const [cardReverse, setCardReverse] = useState(false);
    const [currentCard, setCurrentCard] = useState(1);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [needsPracticeCategory, setNeedsPracticeCategory] = useState([]);
    const [isSetAvailable, setIsSetAvailable] = useState(true);

    const handleFlipClick = () => {
        if (!isSetAvailable) return;
        setCardReverse(!cardReverse);
    }

    const handleClick = () => {
        if (currentCard === flashcards.length) {
            setIsSetAvailable(false);
        }

        setCurrentCard(previousState => previousState + 1);
        setCurrentCardIndex(previousState => previousState + 1);
    }

    const handleAgainClick = (e) => {
        e.preventDefault();
        if (!isSetAvailable) return;

        handleClick();
        setNeedsPracticeCategory((previousState) => (
            [...previousState, flashcards[currentCardIndex]]
        ))
    }

    const handleSuccessClick = (e) => {
        e.preventDefault();
        if (!isSetAvailable) return;

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
                <div className={`learning__set ${!isSetAvailable? 'finished' : ''}`}>
                    <p className="learning__instruction">Tap card to flip it!</p>}
                    <div className="learning__single">
                        <div className={`learning__card ${cardReverse ? 'reverse' : ''}`}
                             onClick={handleFlipClick}>
                            <div className="learning__counter">
                                {isSetAvailable ? currentCard : flashcards.length}/{flashcards.length}
                            </div>
                            {isSetAvailable
                                ? <Flashcard flashcard={flashcards[currentCardIndex]}/>
                                : <FinishedSetInfo needsPracticeCategory={needsPracticeCategory}/>}
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