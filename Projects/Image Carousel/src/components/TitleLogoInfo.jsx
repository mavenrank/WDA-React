import React, { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
const TitleLogoInfo = ({ carousel }) => {
    const { title, logo, images, videoSrc } = carousel[0];

    let [arrayIndex, setArrayIndex] = useState(0);
    let [currentImage, setCurrentImage] = useState(images[arrayIndex]);

    const handlePrev = () => {
        if (arrayIndex === 0) {
            console.log(`Inside HandlePrev, arrayIndex = ${arrayIndex}`);
            setArrayIndex(images.length - 1);
            console.log(images[arrayIndex]);
            setCurrentImage(images[arrayIndex]);
        } else {
            setArrayIndex(arrayIndex - 1);
            setCurrentImage(arrayIndex);
        }
        return;
    };

    const handleNext = () => {
        if (arrayIndex === images.length - 1) {
            setArrayIndex(0);
            setCurrentImage(images[arrayIndex]);
        } else {
            setArrayIndex(arrayIndex + 1);
            setCurrentImage(arrayIndex);
        }
        return;
    };

    useEffect(() => {}, [arrayIndex, currentImage]);
    return (
        <div>
            <div className="logo-div">
                <img src={logo} alt={title} className="logo" />
            </div>
            <div className="carousel-section">
                <div className="prev-image" onClick={handlePrev}>
                    <FaChevronLeft className="chevron" />
                </div>

                <div className="image-section">
                    <div className="image-inlet">
                        <img
                            className="image"
                            src={currentImage}
                            title={title}
                        ></img>
                    </div>
                </div>
                <div className="next-image">
                    <FaChevronRight className="chevron" onClick={handleNext} />
                </div>
            </div>
        </div>
    );
};

export default TitleLogoInfo;
