import React from 'react';
import { Form, Button} from 'react-bootstrap';
<<<<<<< HEAD
import {  MDBCol } from "mdbreact";
//import './node_modules/elemental/less/elemental.less'
//import { Button, FormField, FormInput, FormSelect, Form } from 'elemental' 
class Login extends React.Component {
render(){
  return (
    
<div className='formcontainer'>
<MDBCol md="4">
<Form>
  
=======

class Login extends React.Component {
render(){
    return(
<div className='container pad'>
<Form>
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      Username as used for registration
    </Form.Text>
  </Form.Group>
<<<<<<< HEAD
  
=======

>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
<<<<<<< HEAD
  
  
  <Button variant="primary" type="submit">
    Submit
  </Button>
  
</Form>
</MDBCol>
</div>


  );
}
}




  
=======
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>

    )
}
}
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
export default Login;