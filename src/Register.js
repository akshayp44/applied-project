import React from 'react';
import './App.css';
import { Form, Button} from 'react-bootstrap';
class Register extends React.Component {
render(){
    return(
        <div className='container'>
    <Form>
  <Form.Group controlId="formBasicEmail">
   <Form.Label>User name</Form.Label>
   <Form.Control type="email" placeholder="Select Username" />
  </Form.Group>

  <Form.Row>
  <Form.Group controlId="formBasicEmail">
   <Form.Label>First name</Form.Label>
   <Form.Control type="Fname" placeholder="Enter First name" />
  </Form.Group>

  <Form.Group controlId="formBasicEmail">
   <Form.Label>Middle name</Form.Label>
   <Form.Control type="Mname" placeholder="Enter Middle name" />
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
   <Form.Label>Last name</Form.Label>
   <Form.Control type="Mname" placeholder="Enter Last name" />
  </Form.Group>
  </Form.Row>
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
    );
}
}
export default Register;