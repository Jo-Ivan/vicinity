import React, { useState } from "react";
import { Modal } from "react-responsive-modal";

import "react-responsive-modal/styles.css";

const VicinityModal = ({ title = "Modal Window", subtitle = "Confirm your data", children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="button is-primary is-fullwidth">
        Open
      </button>
      <Modal
        focusTrapped={false}
        open={isOpen}
        onClose={() => setIsOpen(false)}
        classNames={{ modal: "vicinity-modal" }}
        center
      >
        <h4 className="modal-title title">{title}</h4>
        <p className="modal-subtitle">{subtitle}</p>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button type="button" className="button is-success is-fullwidth">
            Confirm
          </button>
          <button onClick={() => setIsOpen(false)} type="button" className="button is-light is-fullwidth">
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};

export default VicinityModal;
