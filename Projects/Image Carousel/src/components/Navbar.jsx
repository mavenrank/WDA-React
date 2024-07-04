import React from "react";
import carousel_data from "../caruousel_data";

const Navbar = ({handleNavItem}) => {


    return (
        <div className="navbar">
            <div className="brand">
                Carousels
            </div>
            {carousel_data.map((item) => {
                return <div key={item.title} className="nav-item" onClick={handleNavItem}>{item.title}</div>;
            })}
        </div>
    );
};

export default Navbar;
