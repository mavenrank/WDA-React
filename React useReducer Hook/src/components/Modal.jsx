import React from "react";

const Modal = ({ modalContent }) => {
    return (
        <div className="modal-div">
            <p className="modal-content">{modalContent}</p>
        </div>
    );
};

export default Modal;
