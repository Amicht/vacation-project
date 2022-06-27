import { createRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {  register } from "../services/api";


const Register = () => {
    const navigate = useNavigate();
    const name = createRef<HTMLInputElement>();
    const last_name = createRef<HTMLInputElement>();
    const username = createRef<HTMLInputElement>();
    const password = createRef<HTMLInputElement>();
    const password2 = createRef<HTMLInputElement>();

    const onRegister = (e:any) => {
        e.preventDefault();
        const userInp = {
            name: name.current?.value,
            last_name: last_name.current?.value,
            username: username.current?.value,
            password: password.current?.value,
            password2: password2.current?.value,
        }
        if(userInp.password !== userInp.password2 || 
            userInp.password === '' || userInp.name === '' ||
            userInp.username === '' || userInp.last_name === '') return;
            delete userInp.password2;
        register(userInp).then(()=> navigate('/login'))
        .catch(err => console.log(err.message))
    };

  return (
    <div className="text-center py-5">
        <h2>Register</h2>
        <Form className="col-sm-6 mx-auto">
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter name"
                ref={name} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Enter last name"
                ref={last_name} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username"
                ref={username}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password"
                ref={password}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password"
                ref={password2} />
            </Form.Group>
            
            <Button variant="primary" type="submit" onClick={onRegister}>
                Submit
            </Button>
        </Form>
        <Link to="/login" >Already have an account? login</Link>
    </div>
  )
};

export default Register