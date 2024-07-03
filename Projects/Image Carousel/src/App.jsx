import React from "react";
import Navbar from "./components/Navbar";
import TitleLogoInfo from "./components/TitleLogoInfo";
import ImageCarousel from "./components/ImageCarousel";

import carousel_data from "./caruousel_data";
const App = () => {

    const spidermanCarousel = carousel_data.filter((object) => {
        return object.id === "Spiderman";
    }, [0]);
    const iphoneCarousel = carousel_data.filter((object) => {
        return object.id === "iPhone";
    })

    return (
        <React.Fragment>
            <Navbar />
            <TitleLogoInfo carousel={spidermanCarousel} />
            <ImageCarousel carousel={spidermanCarousel} />
        </React.Fragment>
    );
};

export default App;
