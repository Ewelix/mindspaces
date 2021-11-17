import React from 'react';

const Flashcard = ({ flashcard }) => {
    return (
        <>
            <div className="learning__question">{flashcard.front}</div>
            <div className="learning__answer">{flashcard.back}</div>
        </>
    );
};

export default Flashcard;