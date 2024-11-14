// this component will manage the main logic of the counter, including the state.
import React, { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const Counter  = () => {
    // define the state for the counter
    const [count, setCount] = useState(0);

    // define a variable for feedback message
    const feedback = count > 10 ? 'Its higher than 10' : 'Keep counting';

    // define a function to increment the counter
    const incrementCount = () => {
        setCount (count + 1);
    };
    return ( 
        <div>
            <h2>Counter</h2>
            <Count count={ count } />
            <Button increment={ incrementCount }/>
            <p>{ feedback }</p>
        </div>
    );
}

export default Counter;