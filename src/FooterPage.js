import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './App.css';

const FooterPage = () => {
  return (
    <MDBFooter color="grey" className="font-small bott pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
            <h5 className="title">synerD</h5>
          </MDBCol>
          <MDBCol md="8">
          </MDBCol>
          </MDBRow>

          <MDBRow>
          <MDBCol md="4">
          <span class="fa fa-building"></span>&nbsp;Address: 4246 E Cotton Ct, Gilbert, AZ 85234
          </MDBCol>
          <MDBCol md="5">
          <a href ="http://www.ffutche.org/homepage/get_involved"> Get Involved</a>
          </MDBCol>
          <MDBCol md="3">
          <a href = "http://www.sagiusa.org/aboutus/">About Us </a>
          </MDBCol>
          </MDBRow>

          <MDBRow>
          <MDBCol md="4">
          <span class="fa fa-envelope-open"></span>&nbsp;Email: founta@hotmail.com
          </MDBCol>
          <MDBCol md="5">
          <a href = "http://www.ffutche.org/blog/blog_list"> Blog </a>
          </MDBCol>
          <MDBCol md="3">
          <a href = "http://www.ffutche.org/homepage/revenues">Revenues</a>
          </MDBCol>
          </MDBRow>

          
          <MDBRow>
          <MDBCol md="4">
          <span class="fa fa-phone-square"></span>&nbsp; Phone: (202) 241 - 0033
          </MDBCol>
          <MDBCol md="5">
          <a href = "http://www.ffutche.org/homepage/ways_to_give"> Ways To Give </a>
          </MDBCol>
          <MDBCol md="3">
          <a href = "http://www.ffutche.org/homepage/expenditures"> Expenditures </a>
          </MDBCol>
          </MDBRow>
          <MDBRow>
            <p></p>
          </MDBRow>




      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
        <a href="http://www.ffutche.org/homepage/site_map">Site Map</a> &#124; <a href="http://www.ffutche.org/homepage/site_map">Terms &amp; Conditions</a> &#124; <a href="http://www.ffutche.org/homepage/site_map">Privacy Policy</a> &#124; &copy; {new Date().getFullYear()} Copyright
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;