import React from 'react';
import { Link } from "react-router-dom";
import "./Collections.scss";
import trash from "./../../images/delete.png";

const Collections = () => {
    return (
        <>
            <div className="collection">
                    <div className="collection__single">
                        <div className="collection__card collection__card--add">
                            Add a new collection
                            <Link to="/new-collection" className="collection__add">+</Link>
                        </div>
                    </div>

                    <div className="collection__single">
                        <div className="collection__card">
                            <img src={trash} className="collection__remove" alt="trash icon" />
                            <span>React</span>
                        </div>
                        <div className="collection__frame frame"/>
                    </div>
                    <div className="collection__single">
                        <div className="collection__card">
                            <img src={trash} className="collection__remove" alt="trash icon" />
                            <span>Sass</span>
                        </div>
                        <div className="collection__frame frame"/>
                    </div>
            </div>
        </>
    );
};

export default Collections;