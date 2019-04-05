import React from 'react';
import './App.css';
import { Form, Button} from 'react-bootstrap';
class Register extends React.Component {
render(){
    return(
        <div className='container'>
    <Form>
  <Form.Group controlId="formBasicEmail">
   <p><Form.Label>Email address</Form.Label>
   <Form.Control type="email" placeholder="Enter email" /></p>
    
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

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