import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
    const [alert, setAlert] = useState(false);
    const hex = rgbToHex(rgb[0], rgb[1], rgb[2]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 3000);

        return (() => clearTimeout())
    }, [alert])
    
    return (
        <React.Fragment>
            <article
                className={`color ${index > 10 && "color-light"}`}
                style={{
                    backgroundColor: `rgb(${rgb})`,
                }}
                onClick={() => {
                    setAlert(true), 3000;
                    navigator.clipboard.writeText(hex);
                }}
            >
                <p className="percent-value">{weight}%</p>
                <p className="color-value">{hex}</p>
                {alert && <p className="alert">Copied!</p>}
            </article>
        </React.Fragment>
    );
};

export default SingleColor;
