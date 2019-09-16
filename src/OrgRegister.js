<<<<<<< HEAD
import React from 'react';
import './App.css';
// eslint-disable-next-line 
import axios from 'axios';
import CSVReader from 'react-csv-reader'
import { Form, Input, Button } from 'antd'; 

const FormItem = Form.Item;


class OrgRegister extends React.Component {
        handleFormSubmit = (event) => {
                event.preventDefault();
                const orgname = event.target.elements.orgname.value;
                const desc = event.target.elements.desc.value;
                const address = event.target.elements.address.value;
                const city = event.target.elements.city.value;
                const state = event.target.elements.state.value;
                const phone = event.target.elements.phone.value;
                const zip = event.target.elements.zip.value;
                const file = event.target.elements.file.value;
                
  
        return axios.post('http://127.0.0.1:8000/org member/', {
                orgname : orgname,
                city : city,
                state : state,
                zip : zip,
                phone : phone,
                desc : desc,
                address: address,
                file: file

            })
            .then(res => console.log(res))
            .catch(error => console.error(error));
        }
  
  
render(){

       
    return(


<div className='containerorgform' align="center">

  
  <Form onSubmit = {(event) => this.handleFormSubmit(
                          event
                      )}>
        <br></br>
        <FormItem label = "Organization name">
                <Input name="orgname" placeholder="Enter your organization name"  />
        </FormItem >
        
        
        <FormItem label = "Description">
                <Input name="desc" placeholder="Enter description"  />
        </FormItem >


        
        <FormItem label = "Address">
                <Input name="address" placeholder="Enter your address"  />
        </FormItem >

  
       <FormItem label = "City">
                <Input name="city" placeholder="Enter city"  />
        </FormItem >

        <FormItem label = "Zipcode">
                <Input name="zip" placeholder="Enter your zipcode"  />
        </FormItem >

        <FormItem label = "State">
                <Input name="state" placeholder="Enter your state"  />
        </FormItem >
 
        <FormItem label = "Phone number">
                <Input name="phone" placeholder="Enter your phone number"  />
        </FormItem >
        <br></br>
        <CSVReader
        cssClass="csv-reader-input"
        label="Select CSV to upload members"
        onFileLoaded={this.handleForce}
        onError={this.handleDarkSideForce}
        inputId="ObiWan"
        input name = "file"
        inputStyle={{color: 'red'}}
      />

      <FormItem>

                      <Button type="primary" htmlType="submit" >
                         
                          Submit
                      </Button>
                      </FormItem>
  

      
 

   </Form>
   
   </div>
    );
}
}
export default OrgRegister;
=======
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


<div className='container pad' align="left">
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
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
