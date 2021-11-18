import React from 'react';
import { Link } from "react-router-dom";
import "./FinishedSetInfo.scss";

const FinishedSetInfo = ({needsPracticeCategory, match}) => {

    return (
            <div className="info">
                {needsPracticeCategory.length > 0 &&
                    <>
                        <h4>Continue learning to master {needsPracticeCategory.length} cards that needs practice.</h4>
                        <a href="">Continue learning</a>
                        <Link>Start from beginning</Link>
                    </>}
                {needsPracticeCategory.length === 0 &&
                    <>
                        <h4>Congrats! You are familiar with this learning set!</h4>
                        <a href="">Learn again</a>
                    </>}
            </div>
    );
};

export default FinishedSetInfo;