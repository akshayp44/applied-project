import React from 'react';
import './App.css';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button} from 'react-bootstrap';





class Register extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleCh = this.handleCh.bind(this);
      }
     
      handleChange(date) {
        this.setState({
          startDate: date
        });
      }

      handleCh(event) {
        this.setState({
          size: event.target.value
        });
      }


      

render(){
    return(


<div className='container' align="left">
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
      <Form.Group controlId="formBasicAddress">
      <Form.Label> Address</Form.Label>
      <Form.Control type="address" placeholder="Enter your address"/>
      </Form.Group>

      <Form.Row>
      <Form.Group controlId="formBasicCity">
      <Form.Label>City</Form.Label>
      <Form.Control type="city" placeholder="Enter city" />
      </Form.Group>

      <Form.Group controlId="formBasicZip">
      <Form.Label>Zip code</Form.Label>
      <Form.Control type="zip" placeholder="Enter zipcode" />
      </Form.Group>
      <Form.Group controlId="formBasicState">
      <Form.Label>State</Form.Label>
      <Form.Control type="State" placeholder="Enter your state" />
      </Form.Group>
      </Form.Row>

      <Form.Group controlId="formBasicDob">
      <Form.Label>Date of birth</Form.Label>
      &nbsp;&nbsp;&nbsp; 
      <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
    </Form.Group> 


    <Form.Group controlId="formBasicChoose">
    <Form.Label> Are you a member of an organization?</Form.Label>

            <p>
              <label>
                <input
                  type="radio"
                  value="small"
                  checked={this.state.size === "small"}
                  onChange={this.handleCh}
                />
                Yes
              </label>
              </p>
              <p>
              <label>
                <input
                  type="radio"
                  value="large"
                  checked={this.state.size === "large"}
                  onChange={this.handleCh}
                />
                No
              </label>
              </p>


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