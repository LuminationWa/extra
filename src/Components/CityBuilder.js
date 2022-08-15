import React, { useState, useEffect } from "react";
const CityBuilder = () => {
    const [AIChoices, setAIChoices] = useState([]);
    const [playerChoices, setPlayerChoices] = useState([]);
    
    useEffect(() => {
        console.log('mounted');
    });

    const AIChooses = () => {

    };

    const displayElement = () => {
        
    };

    const checkStatus = () => {

    };

    const destiny = () => {

    };

    const displayHints = () => {

    };
    
    return (
        <div id="city">
            <button>Element A</button>
            <button>Element B</button>
            <button>Element C</button>
        </div>
    )
};

export default CityBuilder;