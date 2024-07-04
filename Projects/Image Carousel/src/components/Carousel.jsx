import React, { useEffect, useState, Suspense, lazy } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import { FaPause } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa6";

const Carousel = ({ carousel }) => {
    const { title, logo, images } = carousel[0];
    let videoSrc = null;
    let videoPoster = null;
    let videoDetails = null;
    carousel[0].videoSrc ? (videoSrc = carousel[0].videoSrc) : null;
    carousel[0].videoPoster ? (videoPoster = carousel[0].videoPoster) : null;
    carousel[0].videoDetails ? (videoDetails = carousel[0].videoDetails) : null;
    let [arrayIndex, setArrayIndex] = useState(0);
    let [currentImage, setCurrentImage] = useState(images[arrayIndex]);
    let [autoScroll, setAutoScroll] = useState(true);

    const handlePrev = () => {
        setArrayIndex((prevIndex) => {
            const newIndex =
                prevIndex === 0 ? images.length - 1 : prevIndex - 1;
            setCurrentImage(images[newIndex]);
            return newIndex;
        });
    };

    const handleNext = () => {
        setArrayIndex((prevIndex) => {
            const newIndex =
                prevIndex === images.length - 1 ? 0 : prevIndex + 1;
            setCurrentImage(images[newIndex]);
            return newIndex;
        });
    };

    useEffect(() => {
        if (autoScroll) {
            const interval = setInterval(() => {
                setArrayIndex((prevIndex) => {
                    const newIndex =
                        prevIndex === images.length - 1 ? 0 : prevIndex + 1;
                    setCurrentImage(images[newIndex]);
                    return newIndex;
                });
            }, 4000);
            return () => clearInterval(interval);
        }
    }, [images, arrayIndex, currentImage, autoScroll]);

    return (
        <div className="main-div">
            <div className="logo-div">
                <img src={logo} alt={title} className="logo" />
            </div>
            <div className="play-pause">
                <button
                    className="btn"
                    onClick={() => {
                        setAutoScroll(!autoScroll);
                    }}
                >
                    <div className="btn-div">
                        {autoScroll ? (
                            <FaPause className="icon" />
                        ) : (
                            <FaPlay className="icon" />
                        )}
                        {autoScroll ? "Pause AutoScroll" : "Resume Autoscroll"}
                    </div>
                </button>
            </div>
            <div className="title-and-image-carousel">
                <h2 className="carousel-section-title">Image Carousel</h2>
                <div className="carousel-section">
                    <div className="prev-image" onClick={handlePrev}>
                        <FaChevronLeft className="chevron" />
                    </div>

                    <div className="image-section">
                        <div className="image-inlet">
                            <img
                                loading="lazy"
                                className="image"
                                src={currentImage}
                                title={title}
                            ></img>
                        </div>
                    </div>
                    <div className="next-image" onClick={handleNext}>
                        <FaChevronRight className="chevron" />
                    </div>
                </div>
            </div>

            <div className="title-and-video">
                <h2>Video Song</h2>
                <div className="video-section">
                    {videoSrc ? (
                        videoSrc.map((item, count) => {
                            return (
                                <React.Fragment key={count}>
                                    <p>Song : {videoDetails.song}</p>
                                    <p>Singers: {videoDetails.singers}</p>
                                    <p>Released: {videoDetails.released}</p>
                                    {console.log(
                                        `Songwriters: ${videoDetails.songwriters}\nProducers: ${videoDetails.producers}`
                                    )}
                                    <video
                                        src={item}
                                        controls
                                        className="video"
                                        poster={videoPoster[count]}
                                        preload="auto"
                                    ></video>
                                </React.Fragment>
                            );
                        })
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
