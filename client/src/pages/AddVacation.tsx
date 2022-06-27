import { useContext, useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { SocketCtxt } from '../App';
import Header from '../components/Header';
import UserI from '../interface/UserI';

const AddVacation = () => {
  const user:UserI = useSelector((state:any) => state.user.value);
  const mySocket = useContext(SocketCtxt);
  const [newVac, setNewVac] = useState<any>({})
  const navigate = useNavigate();
  
  useEffect(()=> {if(user.role < 2) navigate('/')},[navigate,user]);

  const addToVacation = (key:string, value:any) => setNewVac({...newVac, [key]:value});
  const onSend = (e:any) => {
    e.preventDefault();
    if(!newVac?.destination || !newVac.description || !newVac.picture || 
      !newVac.price || !newVac.from_date || !newVac.to_date) {return ;};
    mySocket.addVacation(newVac);
    navigate('/');
  };

  return (
    <>
    <Header />
    <div className='col-md-6 mx-auto text-center my-5'>
    <h2>Add Vacation</h2>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Destination</Form.Label>
        <Form.Control type="text" placeholder="Enter the vacation's Destination" 
          onChange={e => addToVacation("destination", e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Something about the place..." 
        onChange={e => addToVacation("description", e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Add image</Form.Label>
        <Form.Control type="file" 
        onChange={(e:any) => addToVacation("picture", e.target.files[0])}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Vacation start:</Form.Label>
        <Form.Control type="date" 
        onChange={e => addToVacation("from_date", e.target.value)}/>
        <Form.Label>Vacation end:</Form.Label>
        <Form.Control type="date" 
        onChange={e => addToVacation("to_date", e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control type="number" placeholder="Total price" 
        onChange={e => addToVacation("price", e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={onSend}>
        Submit
      </Button>
    </Form>
    </div>
    </>
  )
}

export default AddVacation