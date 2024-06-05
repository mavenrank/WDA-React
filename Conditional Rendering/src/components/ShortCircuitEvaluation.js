import React, { useState } from "react";

const ShortCircuitEvaluation = () => {
    //this is called as short circuit evaluation.
    const text = "Roopam";
    const firstValue = text && "Hello World";
    // if the text returns true then it displays "Hello World"

    //Issue with this next part
    // const secondValue = text || "Hello World";
    // if the text is false, only then it return the "Hello World"
    const [isError, isSetError] = useState(false);

    return (
        <div className="section">
            <h2 className="sectionHeading">Short Circuit</h2>
            <div className="scetionedDiv">
                <p>{firstValue}</p>
                <button className="btn"
                    onClick={() => {
                        isSetError(!isError);
                    }}
                >
                    Toggle Error
                </button>
                {isError && <p>Error...</p>}
                {/* //ternary operator also works */}
                {isError ? <p>There is an Error</p> : <p>There is no Error</p>}
            </div>
        </div>
    );
};

export default ShortCircuitEvaluation;
