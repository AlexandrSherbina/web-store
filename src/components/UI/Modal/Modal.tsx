import React, { useState } from "react";
import "./Modal.scss";
interface ModalType {
  onClose: () => void;
  children: React.ReactNode;
}
export const Modal: React.FC<ModalType> = ({ onClose, children }) => {
  return (
    <>
      <div className="modal-custom">
        <div className="modal-container">
          <button
            onClick={onClose}
            type="button"
            className="btn btn-danger modal-custom-close"
          >
            X
          </button>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </>
  );
};
