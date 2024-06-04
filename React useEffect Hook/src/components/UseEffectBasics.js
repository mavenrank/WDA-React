import React, { useEffect, useState } from "react";

const UseEffectBasics = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count >= 1) {
            document.title = `Count is ${count}`;
        }
    }, [count]);

    return (
        <div className="section">
            <h2 className="sectionHeading">
                Changing the Title by using UseEffect
            </h2>
            <div className="sectionedDiv counter">
                <p>Counter Value: {count}</p>
                <button className="btn" onClick={() => setCount(count + 1)}>
                    Increase Count
                </button>
            </div>
        </div>
    );
};

export default UseEffectBasics;
