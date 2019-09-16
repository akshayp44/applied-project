import React from 'react';
import './App.css';
<<<<<<< HEAD

//import { Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { Form, Input, Button } from 'antd'; 


const FormItem = Form.Item;
//const {TextArea} = Input;




class Register extends React.Component {
 
    handleFormSubmit = (event) => {
         event.preventDefault();
         const fname = event.target.elements.fname.value;
         const mname = event.target.elements.mname.value;
         const lname = event.target.elements.lname.value;
         const uname = event.target.elements.uname.value;
         const pwd = event.target.elements.pwd.value;
         const address = event.target.elements.address.value;
         const city = event.target.elements.city.value;
         const state = event.target.elements.state.value;
         const zip = event.target.elements.zip.value;
          
         //console.log(fname, mname, lname, uname, pwd, address, city, state, zip)
          //console.log(postObj );
          // eslint-disable-next-line
          
                return axios.post('http://127.0.0.1:8000/dbinit/', {
                    fname : fname,
                    mname : mname,
                    lname : lname,
                    uname : uname,
                    pwd : pwd,
                    address : address,
                    city: city,
                    state: state,
                    zip: zip

                })
                .then(res => console.log(res))
                .catch(error => console.error(error));
                
          

          

          }
          

                  
        
      render(){
        return(
          
            <div className = "containerform" align="center">
                 
                      <Form onSubmit = {(event) => this.handleFormSubmit(
                          event
                      )}>
                           <br></br>  If you are an orgainzation please &nbsp;&nbsp;&nbsp;
                      <Link to='/OrgRegister'>
                        <Button type='primary'>register here</Button>
                      </Link>
                      <br></br>
                            <FormItem label = "First name">
                                
                                <Input name="fname" placeholder="Enter First name"  />
                            </FormItem >
                            

                            <FormItem label = "Middle name"  >
                                
                                <Input name="mname" placeholder="Enter middle name"  />
                            </FormItem >
                            <FormItem label = "Last name"  >
                                
                                <Input name="lname" placeholder="Enter Last name"  />
                            </FormItem >
                      
                          
                            <FormItem label = "User name"  >
                                
                                <Input name="uname" placeholder="Enter user name"  />
                            </FormItem >
                        

                            <FormItem label = "Password"  >
                                
                                <Input name="pwd" type = "password"  placeholder="Enter password"  />
                            </FormItem>
                            
                             
                            <FormItem label = "Address">
                                
                                <Input name="address" placeholder="Enter address"  />
                            </FormItem>
                      
                            <FormItem label = "City">
                                
                                <Input name="city" placeholder="City name"  />
                            </FormItem>

                            <FormItem label = "Zipcode"  >
                                
                                <Input name="zip" placeholder="Zipcode of area"  />
                            </FormItem >
                            <FormItem label = "State" >
                                
                                <Input name="state" placeholder="Enter state"  />
                            </FormItem>
                        <br></br>
                        

                    <FormItem>

                      <Button type="primary" htmlType="submit">
                         
                          Submit
                      </Button>
                      </FormItem>

                  </Form>
      </div>  
            
    );

}

}
export default Register;
=======
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';





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


<div className='container pad' align="left">
<p>if you are an orgainzation please
  <Link to='/OrgRegister'>
  <Button type='submit'>register here</Button>
  </Link>
</p>
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
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
