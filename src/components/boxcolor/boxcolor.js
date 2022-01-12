import React from 'react';
import './boxcolor.css';

const BoxColor = (props) => {
    const divStyle = {
        backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
    }

    return (
        <div className="BoxColor" style={divStyle}>
            <p>rgb({props.r}, {props.g}, {props.b})</p>
        </div>
    )
}

export default BoxColor;
