import React from "react";
import Names from "./Names";

const LeftSection = ({ clickHandler, activeIndex}) => {
    
    return (
        <div>
            <div className="title"><Names clickHander={clickHandler} activeIndex={activeIndex}></Names></div>
        </div>
    );
};

export default LeftSection;
