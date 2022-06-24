import { Button, Form } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { login } from "../logic/api";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    
    const [user, setUser] = useState({username:'',password:''});
    const navigate = useNavigate();

    const onLogin = (e:any) => {
        e.preventDefault();
        const { username, password} = user;
        if(username === '' || password === '') return;
        login(user).then(()=> navigate('/'))
        .catch(err => console.log(err.message));
    };

  return (
    <div className="text-center py-5">
        <h2>Login</h2>
        <Form className="col-sm-6 mx-auto">
            <Form.Group className="mb-3">
                <Form.Label>username</Form.Label>
                <Form.Control type="text" placeholder="enter username" 
                onChange={e=> setUser({...user, username:e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="enter Password"
                onChange={e=> setUser({...user, password:e.target.value})} />
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={onLogin}>
                Submit
            </Button>
        </Form>
        <Link to="/register" >New to the site? register</Link>
    </div>
  )
}

export default Login