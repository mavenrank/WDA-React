import React, { useState } from "react";

const UseStateCounter = () => {
    const [value, setValue] = useState(0);
    return (
        <React.Fragment>
            <h2>Generic Counters </h2>
            <div className="counter-container">
                <div className="counter-value">
                    <p style={{ fontWeight: "bold" }}>{value}</p>
                </div>
                <div className="counter-buttons">
                    <button className="btn" onClick={() => setValue(value - 1)}>
                        -
                    </button>
                    <button className="btn" onClick={() => setValue(0)}>
                        Reset
                    </button>
                    <button className="btn" onClick={() => setValue(value + 1)}>
                        +
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UseStateCounter;
