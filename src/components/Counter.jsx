import React, { useState } from "react";

export const counter = () => {

    const [counter, setcounter] = useState(0)
    useState();

    return(
        <React.Fragment>
            <h2>Counter value:{counter}</h2>
            <button>Increment</button>
            <button>Decrement</button>
        </React.Fragment>
    )
}