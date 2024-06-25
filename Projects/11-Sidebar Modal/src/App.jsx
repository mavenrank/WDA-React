import React from "react";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "./components/Modal";
const App = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <React.Fragment>
            {showSidebar && <Sidebar closeSidebar={toggleSidebar} />}
            <div className="actual-screen">
                <div>
                    <button className="hamburger-btn" onc>
                        <GiHamburgerMenu
                            className="hamburger-icon"
                            onClick={toggleSidebar}
                        />
                    </button>
                </div>
                <div className="text">

                </div>
                {showModal && <Modal toggleModal={toggleModal}/>}
                <button className="show-modal" onClick={toggleModal}>Show Modal</button>
            </div>
        </React.Fragment>
    );
};

export default App;
