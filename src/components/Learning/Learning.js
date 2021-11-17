import React, {useRef, useState} from 'react';
import "./Learning.scss";
import { Link } from "react-router-dom";
import close from "../../images/close-orange.png";
import arrow from "../../images/again-arrow.png";
import check from "../../images/check(2).png";
import Flashcard from "../Flashcard/Flashcard";

const Learning = ({match, location}) => {
    const [front, setFront] = useState('What is DOM');
    const [back, setBack] = useState('Document Object Model');
    const [cardReverse, setCardReverse] = useState(false);
    const [flashcards, setLoc] = useState(location.state.flashcards);

    const currentCard = useRef(0);
    // console.log(currentCard);

    console.log('fiszki learning', flashcards);

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
                            <div className="learning__counter">/{flashcards.length}</div>
                            {flashcards.length && <Flashcard flashcard={flashcards[0]}/>}
                        </div>
                        <div className="learning__frame frame"/>
                    </div>
                    <div className="learning__buttons">
                        {/*needs practice learned*/}
                        <a href="#" className="learning__button">
                            <img src={arrow} alt=""/>
                        </a>
                        <a href="#" className="learning__button">
                            <img src={check} alt=""/>
                            </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Learning;