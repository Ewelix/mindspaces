import React from 'react';
import "./FinishedSetInfo.scss";


const FinishedSetInfo = ({needsPracticeCategory, onContinue, onRestart}) => {
    const handleContinueClick = () => {
        if (typeof onContinue === "function"){
            onContinue();
        }
    };

    const handleRestartClick = () => {
        if (typeof onRestart === "function") {
            onRestart();
        }
    }

    return (
            <div className="info">
                {needsPracticeCategory.length > 0 &&
                    <>
                        <h4>Continue learning to master
                            {needsPracticeCategory.length > 1
                                ? ` ${needsPracticeCategory.length} cards that need practice.`
                                : ` ${needsPracticeCategory.length} card that need practice`}
                            </h4>
                        <a className="info__btn"
                           onClick={handleContinueClick}>Continue learning</a>
                        <a className="info__btn"
                           onClick={handleRestartClick}>Start from beginning</a>
                    </>}
                {needsPracticeCategory.length === 0 &&
                    <>
                        <h4>Congrats! You are familiar with this learning set!</h4>
                        <a className="info__btn"
                           onClick={handleRestartClick}>Learn again</a>
                    </>}
            </div>
    );
};

export default FinishedSetInfo;