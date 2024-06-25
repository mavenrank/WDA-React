import React from "react";
import { ImCross } from "react-icons/im";

const Modal = ({ toggleModal }) => {
    return (
        <div className="modal-div">
            <div className="modal">
                <div className="modal-content">
                    <h3 className="modal-title">Modal Title</h3>
                    <button className="modal-close" onClick={toggleModal}>
                        <ImCross/>
                    </button>

                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. A hic facilis error soluta, vel rem dignissimos
                        sed qui odit vero repudiandae eveniet voluptatibus
                        aliquid eius accusamus laboriosam earum natus
                        voluptatum.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
