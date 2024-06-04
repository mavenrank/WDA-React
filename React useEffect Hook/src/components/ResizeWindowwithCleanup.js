import React, { useEffect, useState } from "react";

const ResizeWindowwithCleanup = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    const checkSize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    };
    useEffect(() => {
        window.addEventListener("resize", checkSize);

        return window.removeEventListener("resize", checkSize);
    });

    return (
        <div className="section">
            <h2 className="sectionHeading">Update Window Dimensions</h2>
            <div className="sectionedDiv" style={{ fontWeight: "bold" }}>
                {width} x {height}
            </div>
        </div>
    );
};

export default ResizeWindowwithCleanup;
