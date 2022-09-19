import React from "react";

import { RiCloseCircleFill } from "react-icons/ri";

type Props = {
    onClose: any;
    children: React.ReactNode;
};

const Modal = ({ onClose, children }: Props) => {
    return (
        <div className="modal-container">
            <RiCloseCircleFill onClick={onClose} className="modal-icon" />
            <div className="modal-image">{children}</div>
        </div>
    );
};

export default Modal;
