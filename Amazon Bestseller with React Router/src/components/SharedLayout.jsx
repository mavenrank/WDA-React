import React from "react";
import NavBar from "./NavBar";

import { Link, Outlet } from "react-router-dom";
import Home from "./Home";
const SharedLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
        </div>
    );
};

export default SharedLayout;
