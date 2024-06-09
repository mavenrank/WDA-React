import React, { useRef } from "react";

const UseRefBasics = () => {
    const refContainer = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (refContainer.current.value) {
            console.log(refContainer.current.value);
        }
        else {
            alert("Empty Values")
        }
    };

    return (
        <div>
            <h2>Using useRef</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        ref={refContainer}
                    />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default UseRefBasics;
