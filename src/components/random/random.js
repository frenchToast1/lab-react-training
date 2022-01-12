import React from 'react';
import './random.css';

const Random = (props) => {
    const RandomNumber = Math.floor(Math.random() * (props.max-props.min)) + props.min;

    return (
        <div className="Random">
            <p>Random value between {props.min} and {props.max} => {RandomNumber}</p>
        </div>
    )
}

export default Random;