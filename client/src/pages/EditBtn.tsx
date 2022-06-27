import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SocketCtxt } from '../App';
import VacationI from '../interface/vacationI';


const EditBtn = (props:VacationI) => {
  const [show, setShow] = useState(false);
  const [newVacation, setnewVacation] = useState<any>({...props})
  const mySocket = useContext(SocketCtxt);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const changeValue = (key:string, value:any) => setnewVacation({...newVacation, [key]:value});

  const onSend = (e:any)=> {
    e.preventDefault();
    mySocket.updateVacation(newVacation);
    handleClose();
  }
  return (
    <>
    <button className="col-2 mx-auto fw-bolder my-1 btn text-danger text-primary mx-4" onClick={handleShow}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" 
      fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
  </svg></button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update {props.destination}:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} defaultValue={props.description}
              onChange={(e:any) => changeValue("description",e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date"
              onChange={(e:any) => changeValue("from_date",e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date"
              onChange={(e:any) => changeValue("to_date",e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control type="number" defaultValue={props.price}
              onChange={(e:any) => changeValue("price",e.target.value)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
          <Button variant="success" onClick={onSend}>
            update
          </Button>
        </Modal.Footer>
      </Modal>
        </>
  )
}

export default EditBtn