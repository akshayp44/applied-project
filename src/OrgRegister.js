import React from 'react';
import './App.css';
import { post } from 'axios';
import { Form, Button} from 'react-bootstrap';





class OrgRegister extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
          file:null
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
      }
      onFormSubmit(e){
        e.preventDefault() // Stop form submit
        this.fileUpload(this.state.file).then((response)=>{
          console.log(response.data);
        })
      }
      onChange(e) {
        this.setState({file:e.target.files[0]})
      }
      fileUpload(file){
        const url = 'http://example.com/file-upload';
        const formData = new FormData();
        formData.append('file',file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return  post(url, formData,config)
      }

render(){
    return(


<div className='container' align="left">
    <Form>
  <Form.Group controlId="formBasicOrgname">
   <Form.Label>organization name</Form.Label>
   <Form.Control type="name" placeholder="Enter your organization name" />
  </Form.Group>

  
  <Form.Group controlId="formBasicDesc">
   <Form.Label>Description</Form.Label>
   <Form.Control type="Desc" placeholder="Enter description about your organization" />
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
 

  <Form.Group controlId="formBasicDesc">
   <Form.Label>Phone Number</Form.Label>
   <Form.Control type="PhNo" placeholder="Enter your phone number" />
  </Form.Group>

  <form onSubmit={this.onFormSubmit}>
        Upload file of members &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>


  
  <Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
   </Form.Group>

   </Form>
   </div>
    );
}
}
export default OrgRegister;