import React from "react";
import employees from "../data";
import { HiChevronDoubleRight } from "react-icons/hi";

const RightSection = ({ index }) => {
    if (index <= 1) {
        index = 1;
    }
    else if (index >= employees.length){
        index = employees.length;
    }

    const { ID, Name, JobTitle, FromDate, ToDate, Info } = employees[index-1];
    return (
        <div>
            <div className="job-title">{JobTitle}</div>
            <div className="employee-name">{Name}</div>
            <div className="duration">
                <span className="from-date">{FromDate}</span>
                <span> - </span>
                <span className="to-date">{ToDate}</span>
            </div>
            <div className="info-section">
                {Info.map((element) => {
                    return (
                        <div className="info-element">
                            <div className="icon"><HiChevronDoubleRight/></div>
                            <div className="element">{element}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RightSection;
