import React from 'react';

import './App.css';
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div>
      <img src={picture} alt="identity" />
      <strong>First name:{firstName}</strong>
      <strong>Last name:{lastName}</strong>
      <strong>Gender:{gender}</strong>
      <strong>Height:{height}</strong>
      <strong>Birth:{birth}</strong>
    </div>
  );
};

function App() {
  return (
    <div>
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date('1992-07-14')}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />
      <IdCard
        lastName="Delores "
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date('1988-05-11')}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default App;
