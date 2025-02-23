import React from 'react';
import './greetings.css';

const Greetings = ({lang, children}) => {
    let greeting = '';

    switch (lang) {
        case 'de':
            greeting = 'Hallo';
            break;

        case 'en':
            greeting = 'Hello'
            break;
        
        case 'es':
            greeting = 'Hola';
            break;

        case 'fr':
            greeting = 'Bonjour';
            break;

         default:
            greeting = 'Bonjour';
            break;
    }
   

    return (
        <div className="Greetings">
            {greeting} {children}
        </div>   
    )
}

export default Greetings;