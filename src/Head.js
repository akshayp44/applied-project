import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  } from 'reactstrap';

import { Link } from 'react-router-dom'
import './App.css';


  class Head extends React.Component {
  
  render() {
    console.log(this.props);
    return (
      
        <div>
      <div  >
        <Navbar color="light" light expand="md" id="navprop">
          <NavbarBrand href="/"><h1>synerD</h1></NavbarBrand>
          <NavbarToggler/>
          <Collapse  navbar>
          
          
          <NavbarBrand id="todo" >
          <h4><i> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             Let's Serve Purposefully</i></h4>
          </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="http://www.ffutche.org/galleries/events/"><span class="fa fa-image"></span>  &nbsp;Galleries</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://www.ffutche.org/homepage/contact_us"><span class="fa fa-book"></span> &nbsp;Contact Us</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="http://www.ffutche.org/homepage/about_us"><span class="fa fa-info"></span>&nbsp;About Us</NavLink>
              </NavItem>

              
              
              <UncontrolledDropdown nav inNavbar>
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
          <NavbarBrand><p><h3>Synergy of Diaspora</h3></p></NavbarBrand>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" id="buttonprop" class="btn btn-dark"color="grey" > 
          <span class="fa fa-leaf"></span>Donate</button>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <Link to="/"><span class="fa fa-home"></span>&nbsp;Home</Link>&nbsp;&nbsp;&nbsp;
              </NavItem>
            <NavItem>
                <Link to="#"><span class="fa fa-user-circle"></span>&nbsp;Members</Link>&nbsp;&nbsp;&nbsp;
              </NavItem>
              <NavItem>
                <Link to="#"><span class="fa fa-folder"></span>&nbsp;Resources</Link>&nbsp;&nbsp;&nbsp;
              </NavItem>
              <NavItem>
                <Link to='#'><span class="fa fa-user-circle"></span>&nbsp;Sign In</Link>&nbsp;&nbsp;&nbsp;
              </NavItem>
              <NavItem>
                <Link to='/Register' ><span class="fa fa-handshake"></span>&nbsp;Join Us</Link>
              </NavItem>
          </Nav>
          </Collapse>
        
        </Navbar>
      </div>



      
      
      </div>
      
      
    );

  }
}


export default Head;