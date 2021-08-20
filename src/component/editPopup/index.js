import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const EditPopup = ({ modal, toggle, title }) => {
  return (
    <Modal isOpen={modal} toggle={toggle} size="sm">
      <ModalHeader></ModalHeader>
      <ModalBody>
        <div>
          <input type="text" value={title} />
        </div>
      </ModalBody>
      <ModalFooter>
        <button>Cancel</button>
        <button>Save</button>
      </ModalFooter>
    </Modal>
  );
};

export default EditPopup;
