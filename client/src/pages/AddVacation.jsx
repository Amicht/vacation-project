import { useContext, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { UserCtxt } from '../App';
import Header from '../components/Header';

const AddVacation = () => {
    const { user } = useContext(UserCtxt);
    const navigate = useNavigate();

    useEffect(()=> {if(!user.role || user.role < 2) navigate('/')},[navigate,user]);

  return (
    <>
    <Header />
    <div className='col-sm-5 mx-auto text-center my-5'>
    <h2>Add Vacation</h2>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Destination</Form.Label>
        <Form.Control type="text" placeholder="Enter the vacation's Destination" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Something about the place..." />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Add image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Vacation start:</Form.Label>
        <Form.Control type="date" />
        <Form.Label>Vacation end:</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
      <Form.Group className="mb-3">
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Total price" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}

export default AddVacation