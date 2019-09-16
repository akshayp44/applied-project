import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './App.css';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

const FooterPage = () => {
  return (
    <MDBFooter color="grey" className="font-small bott pt-4 mt-4" >
=======

const FooterPage = () => {
  return (
    <MDBFooter color="grey" className="font-small bott pt-4 mt-4">
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
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
<<<<<<< HEAD
          <Link to ="/Donate"> Get Involved</Link>
          </MDBCol>
          <MDBCol md="3">
          <Link to ="/Donate">About Us </Link>
=======
          <a href ="http://www.ffutche.org/homepage/get_involved"> Get Involved</a>
          </MDBCol>
          <MDBCol md="3">
          <a href = "http://www.sagiusa.org/aboutus/">About Us </a>
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
          </MDBCol>
          </MDBRow>

          <MDBRow>
          <MDBCol md="4">
          <span class="fa fa-envelope-open"></span>&nbsp;Email: founta@hotmail.com
          </MDBCol>
          <MDBCol md="5">
<<<<<<< HEAD
          <Link to ="/Donate"> Blog </Link>
          </MDBCol>
          <MDBCol md="3">
          <Link to ="/Donate">Revenues</Link>
=======
          <a href = "http://www.ffutche.org/blog/blog_list"> Blog </a>
          </MDBCol>
          <MDBCol md="3">
          <a href = "http://www.ffutche.org/homepage/revenues">Revenues</a>
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
          </MDBCol>
          </MDBRow>

          
          <MDBRow>
          <MDBCol md="4">
          <span class="fa fa-phone-square"></span>&nbsp; Phone: (202) 241 - 0033
          </MDBCol>
          <MDBCol md="5">
<<<<<<< HEAD
          <Link to ="/Donate"> Ways To Give </Link>
          </MDBCol>
          <MDBCol md="3">
          <Link to ="/Donate">Expenditures </Link>
=======
          <a href = "http://www.ffutche.org/homepage/ways_to_give"> Ways To Give </a>
          </MDBCol>
          <MDBCol md="3">
          <a href = "http://www.ffutche.org/homepage/expenditures"> Expenditures </a>
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
          </MDBCol>
          </MDBRow>
          <MDBRow>
            <p></p>
          </MDBRow>




      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
<<<<<<< HEAD
        <Link to ="/Donate">Site Map</Link> &#124; <Link to ="/Donate">Terms &amp; Conditions</Link> &#124; <Link to ="/Donate">Privacy Policy</Link> &#124; &copy; {new Date().getFullYear()} Copyright
=======
        <a href="http://www.ffutche.org/homepage/site_map">Site Map</a> &#124; <a href="http://www.ffutche.org/homepage/site_map">Terms &amp; Conditions</a> &#124; <a href="http://www.ffutche.org/homepage/site_map">Privacy Policy</a> &#124; &copy; {new Date().getFullYear()} Copyright
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;