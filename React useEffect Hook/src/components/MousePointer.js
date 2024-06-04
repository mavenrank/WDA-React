import React, { useEffect, useState } from "react";

const MousePointer = (e) => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
        const changeMousePosition = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener("mousemove", changeMousePosition);

        return () => {
            window.removeEventListener("mousemove", changeMousePosition);
        };
    });

    return (
        <div className="section">
            <h2 className="sectionHeading">Track Mouse Pointer</h2>
            <div className="sectionedDiv">{JSON.stringify(mousePosition)}</div>
        </div>
    );
};

export default MousePointer;
