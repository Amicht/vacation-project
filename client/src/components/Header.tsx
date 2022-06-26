import { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { SocketCtxt, UserCtxt } from '../App';
import { setToken } from '../logic/api';

function Header() {
    const { user } = useContext(UserCtxt);
    const mySocket = useContext(SocketCtxt);
    const navigate = useNavigate();
    const onLogout = () => {
        mySocket.disconnect();
        setToken('');
        navigate('/login');
    };

  return (
    <Navbar bg="light" expand="lg" className='mb-5'>
        <Navbar.Brand onClick={()=> navigate('/')} className='mx-2 btn'>ObserVacations</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='col'></Nav>
          {user?.role === 2? 
            <>
              <Nav className='col-2'>
                <Nav.Link onClick={()=> navigate('/addVacation')}>Add Vacation</Nav.Link>
              </Nav>
              <Nav className='col-2'>
                <Nav.Link onClick={()=> navigate('/reports')}>Reports</Nav.Link>
              </Nav>
            </>:null}
          <Nav className="me-auto col-2">
            <Nav.Link onClick={onLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Header