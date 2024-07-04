import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TitleLogoInfo from "./components/Carousel";
import ImageCarousel from "./components/VideoCarousel";

import carousel_data from "./caruousel_data";
const App = () => {
    const [currentCarousel, setCurrentCarousel] = useState("");

    const handleNavItem = () => {

    };

    const spidermanCarousel = carousel_data.filter(
        (object) => {
            return object.id === "Spiderman";
        },
        [0]
    );
    const iphoneCarousel = carousel_data.filter((object) => {
        return object.id === "iPhone";
    });

    return (
        <React.Fragment>
            <Navbar handleNavItem={handleNavItem} />
            <TitleLogoInfo carousel={spidermanCarousel} />
            <ImageCarousel carousel={spidermanCarousel} />
        </React.Fragment>
    );
};

export default App;
