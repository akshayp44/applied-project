import React from 'react';
<<<<<<< HEAD

=======
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  } from 'reactstrap';

import { NavLink } from 'react-router-dom'
<<<<<<< HEAD
import { MDBInput, MDBCol } from "mdbreact";
import './App.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


  class Head extends React.Component {

        constructor(props) {
          super(props);
          this.state = {
            members: '',
          }
        }
        componentDidMount(){
          axios.get('http://127.0.0.1:8000/dbinit/')
               .then(res => {
                 this.setState({
                      members: res.data
                     
                 });
                 console.log(res.data);
               })
        }
    
  render() {
    
    const  {members}  = this.state;
    var clr = {color : 'black'}
    var clr2 = {color : 'white'}
    return (
      
        <div className = " header">
          <div class="row">
            
          < div class = "h-15  row align-items-center m-0 p-0">
           <div class="col">
          &nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <NavLink to='/Gallery' style= { clr }><span class="fa fa-image"></span>  &nbsp;Galleries </NavLink>
           </div>
           </div>
           < div class = "h-15 row align-items-center">
           <div class="col">
           &nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
<NavLink to='/About' style= { clr }><span class="fa fa-info"></span>  &nbsp;About Us </NavLink>
           </div>
           </div>
           < div class = "h-15 row align-items-center">
           <div class="col">
           &nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<NavLink to='/Contact' style= { clr }><span class="fa fa-book"></span>  &nbsp;Contact Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </NavLink>
           </div>
           </div>
           
           <MDBCol md="2">
           
      <MDBInput hint="Search" type="text" containerClass="mt-0" />
    
    </MDBCol>
    </div>
       
        <div class = " row align-items-center h-0">
           <col-md-2>
           <NavbarBrand><NavLink to='/' style= { clr }><img src={require('./logo.PNG')} width="290" height="130" alt="cam"/></NavLink></NavbarBrand>
          
           </col-md-2>
           < div class = " h-0  row align-items-center">
           <div class="col">
           <h4><i>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Let's Serve Purposefully&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i></h4>
           </div>
           </div>
           < div class = " h-0 row align-items-center">
           <div class="col">
           <Link to='/Donate'>
           <button type="button" id="buttonprop" class="btn btn-dark"color="grey" > 
          <span class="fa fa-leaf"></span>Donate</button>
          </Link>
           </div>
           </div>

        </div>
        
        <div>

        <Navbar color="dark" light expand="md" id="navprop">
          <NavbarToggler />
          <Collapse navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>

          <NavLink to={members} style= { clr2 }><span class="fa fa-user-circle"></span>&nbsp;Members</NavLink>&nbsp;&nbsp;&nbsp;
              </NavItem>
              <NavItem>
                <NavLink to='/Resource' style= { clr2 }><span class="fa fa-folder"></span>&nbsp;Resources</NavLink>&nbsp;&nbsp;&nbsp;
              </NavItem>
              <NavItem>
                <NavLink to='/Login' style= { clr2 }><span class="fa fa-user-circle"></span>&nbsp;Sign In</NavLink>&nbsp;&nbsp;&nbsp;
              </NavItem>
              <NavItem>
                <NavLink to='/Register' style= { clr2 }><span class="fa fa-handshake"></span>&nbsp;Join Us</NavLink>
              </NavItem>

              <UncontrolledDropdown  nav inNavbar className='padd'  >
                <DropdownToggle nav caret style= { clr2 }>
                < span class="fa fa-book"></span> &nbsp; Our Work
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem><NavLink to='/Education'>
                    Education</NavLink>
                  </DropdownItem>
                  <DropdownItem><NavLink to='/Healthcare'>
                    Healthcare </NavLink>
                  </DropdownItem>
                  
                  <DropdownItem><NavLink to='/Development'>
                    Development</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
=======
import './App.css';


  class Head extends React.Component {
  
  render() {
    var clr = {color : 'black'}
    return (
      
        <div>
      <div>
        <Navbar color="light" light expand="md" id="navprop">
          <NavbarBrand><NavLink to='/' style= { clr }><img src={require('./logo.PNG')} width="300" height="100" alt="cam"/></NavLink></NavbarBrand>
          <NavbarToggler/>
          <Collapse  navbar>
          
          
          <NavbarBrand id="todo" >
          <h4><i>
            &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             Let's Serve Purposefully</i></h4>
          </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="http://www.ffutche.org/galleries/events/" style= { clr }><span class="fa fa-image"></span>  &nbsp;Galleries</NavLink>&nbsp;&nbsp;&nbsp;
              </NavItem>
              <NavItem>
                <NavLink href="http://www.ffutche.org/homepage/contact_us" style= { clr }><span class="fa fa-book"></span> &nbsp;Contact Us</NavLink>&nbsp;&nbsp;&nbsp;
              </NavItem>
              <NavItem>
                <NavLink href="http://www.ffutche.org/homepage/about_us" style= { clr }><span class="fa fa-info"></span>&nbsp;About Us</NavLink>&nbsp;&nbsp;&nbsp;
              </NavItem>
              
              
              <UncontrolledDropdown nav inNavbar className='padd'>
                <DropdownToggle nav caret>
                <span class="fa fa-book"></span> &nbsp; Our Work
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="http://www.ffutche.org/homepage/healthcare">
                    Healthcare
                  </DropdownItem>
                  <DropdownItem href="http://www.ffutche.org/homepage/education">
                    Education
                  </DropdownItem>
                  
                  <DropdownItem href = "http://www.ffutche.org/homepage/development">
                    Development
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      <div  >
        <Navbar color="light" light expand="md">
          <NavbarToggler />
          <Collapse navbar>
          &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;
           
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" id="buttonprop" class="btn btn-dark"color="grey" > 
          <span class="fa fa-leaf"></span>Donate</button>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink to="/" style= { clr }><span class="fa fa-home"></span>&nbsp;Home</NavLink>&nbsp;&nbsp;&nbsp;
              </NavItem>
            <NavItem>
                <NavLink to='#' style= { clr }><span class="fa fa-user-circle"></span>&nbsp;Members</NavLink>&nbsp;&nbsp;&nbsp;
              </NavItem>
              <NavItem>
                <NavLink to="#" style= { clr }><span class="fa fa-folder"></span>&nbsp;Resources</NavLink>&nbsp;&nbsp;&nbsp;
              </NavItem>
              <NavItem>
                <NavLink to='/Login' style= { clr }><span class="fa fa-user-circle"></span>&nbsp;Sign In</NavLink>&nbsp;&nbsp;&nbsp;
              </NavItem>
              <NavItem>
                <NavLink to='/Register' style= { clr }><span class="fa fa-handshake"></span>&nbsp;Join Us</NavLink>
              </NavItem>
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
          </Nav>
          </Collapse>
        
        </Navbar>
<<<<<<< HEAD
        </div>

        </div>
=======
      </div>
      
      
      </div>
      
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
      
    );
  }
}
export default Head;