import React from "react";
import employees from "../data";

const Names = ({ clickHander, activeIndex }) => {
    const employeeNames = employees.map((employee) => employee.Name);
    return (
        <div>
            {employees.map((employee) => {
                const { ID } = employee;
                return (
                    <div>
                        <button
                            className={`name ${activeIndex === ID ? "active" : ""}`}
                            onClick={() => clickHander(ID)}
                        >
                            {employee.Name}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Names;
