import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useContext } from "react"
import { SocketCtxt } from "../App"

interface deleteBtnI{
  vacId: number,
  destination: string
}
const DeleteBtn = (props:deleteBtnI) => {
  const [show, setShow] = useState(false);
  const mySocket = useContext(SocketCtxt);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDelete = () => {
    handleClose();
    mySocket.DeleteVacation(props.vacId);
  }
  return (
    <>
    <button type="button" className="btn-close" aria-label="Close"
      onClick={handleShow}></button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {props.destination}?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            dismiss
          </Button>
          <Button variant="danger" onClick={onDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

  
export default DeleteBtn