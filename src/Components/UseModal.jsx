import React, { useState } from "react";
import { Modal } from "react-overlays";

const UseModal = () => {
  const [showModal, setshowModal] = useState(false);
  const handleClose = () => {
    setshowModal(false);
  };

  const handleSuccess = () => {
    console.log("Sucessully saved");
  };

  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  return (
    <>
      <div className="modal-example">
        <div>
          <button type="button" onClick={() => setshowModal(true)}>
            Open Modal
          </button>
        </div>
        <p>Click to get the open the Modal</p>

        <Modal
          className="modal"
          show={showModal}
          onHide={handleClose}
          renderBackdrop={renderBackdrop}
        >
          <div>
            <div className="modal-header">
              <div className="modal-title">Modal Heading</div>
              <div>
                <span className="close-button" onClick={handleClose}>
                  x
                </span>
              </div>
            </div>
            <div className="modal-desc"></div>
            <div className="modal-footer">
              <button className="primary-button" onClick={handleSuccess}>
                Save Changes
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default UseModal;
