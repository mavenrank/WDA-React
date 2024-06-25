import React from "react";
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { SlCalender } from "react-icons/sl";
import { IoDocuments } from "react-icons/io5";
import { ImCross } from "react-icons/im";

const Sidebar = ({ closeSidebar }) => {
    return (
        <div className="sidebar-div">
            <div className="sidebar">
                <div className="title-and-close">
                    <p className="sidebar-title">Sidebar Title</p>
                    <ImCross className="close-icon" onClick={closeSidebar} />
                </div>

                <div className="sidebar-linklist">
                    <div className="sidebar-link">
                        <FaHome className="sidebar-linkicons"></FaHome>
                        <p className="sidebar-linknames">Home</p>
                    </div>
                    <div className="sidebar-link">
                        <FaUserFriends className="sidebar-linkicons"></FaUserFriends>
                        <p className="sidebar-linknames">Team</p>
                    </div>
                    <div className="sidebar-link">
                        <GrProjects className="sidebar-linkicons"></GrProjects>
                        <p className="sidebar-linknames">Projects</p>
                    </div>
                    <div className="sidebar-link">
                        <IoMdContact className="sidebar-linkicons"></IoMdContact>
                        <p className="sidebar-linknames">Contact</p>
                    </div>
                    <div className="sidebar-link">
                        <SlCalender className="sidebar-linkicons"></SlCalender>
                        <p className="sidebar-linknames">Calender</p>
                    </div>
                    <div className="sidebar-link">
                        <IoDocuments className="sidebar-linkicons"></IoDocuments>
                        <p className="sidebar-linknames">Documents</p>
                    </div>
                </div>
            </div>
            <div className="darken-div"></div>
        </div>
    );
};

export default Sidebar;
