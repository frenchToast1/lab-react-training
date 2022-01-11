import React from 'react';

const IdCard = (props) => {
  return (
    <div>
        <img src={props.picture} alt="identity" />
        <div>
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