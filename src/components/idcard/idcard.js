import React from 'react';
import './idcard.css';

const IdCard = (props) => {
  return (
    <div className="IdCard">
        <img className="IdPic" src={props.picture} alt="identity" />
        <div className="IdData">
            <strong>First name:</strong> {props.firstName} <br/>
            <strong>Last name:</strong> {props.lastName} <br/>
            <strong>Gender:</strong> {props.gender} <br/>
            <strong>Height:</strong> {props.height}cm <br/>
            <strong>Birth:</strong> {props.birth.toDateString()} <br/>
        </div>
    </div>
  );
};

export default IdCard;