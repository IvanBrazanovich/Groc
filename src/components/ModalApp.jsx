import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalApp({ show, setShow, children, handleCreateProject }) {
  const handleClose = () => setShow(false);
  return (
    <Modal show={show} onHide={handleClose} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Create a Project</Modal.Title>
      </Modal.Header>
      <Modal.Body> {children} </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleCreateProject}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalApp;
