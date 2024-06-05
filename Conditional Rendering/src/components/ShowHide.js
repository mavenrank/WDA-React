import React, { useEffect, useState } from "react";

const Item = () => {
    const [size, setSize] = useState(window.innerWidth);

    const checkSize = () => {
        setSize(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', checkSize);
        return (
            window.removeEventListener('resize', checkSize)
        )
    })

    return (
        <div>
            <h3>Window</h3>
            <h4>{size} px</h4>
        </div>
    )
};

const ShowHideWidth = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="section">
            <h2 className="sectionHeading">Show Hide the Width</h2>
            <div className="scetionedDiv">
                <button className="btn"
                    onClick={() => {
                        setShow(!show);
                    }}
                >
                    Show/Hide
                </button>
                {show && <Item />}
            </div>
        </div>
    );
};

export default ShowHideWidth;
