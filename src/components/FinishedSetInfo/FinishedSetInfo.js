import React from 'react';
import "./FinishedSetInfo.scss";

const FinishedSetInfo = ({needsPracticeCategory}) => {

    return (
            <div className="info">
                {needsPracticeCategory.length &&
                    <>
                        <h4>Continue learning to master {needsPracticeCategory.length} cards that needs practice.</h4>
                        <a href="">continue learning</a> or
                        <a href=""> start from beginning</a>
                    </>}
                {needsPracticeCategory.length === 0 &&
                    <>
                        <div>Congrats! You are familiar with this learning set!</div>
                        <a href="">LEARN AGAIN</a>
                    </>}
            </div>
    );
};

export default FinishedSetInfo;