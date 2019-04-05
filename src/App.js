import React, { Component } from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Head from './Head';
import 'react-bootstrap';
import FooterPage from './FooterPage';
import Slider from './Slider';
import Example from './Example';
import { BrowserRouter as Router} from 'react-router-dom';
//import Route from 'react-router-dom/Route'
//import News from './News';


//import { Nav } from 'react-bootstrap';
//import Nav from './Nav';


class App extends Component {
  render() {
    return (
      
      <div className='App' >
        <Router>
        
      
      
      
      <p>
      <Head/>
      </p>

       
      
      <p>
      <Slider/>
      </p>
      
      <p>
       <Example/>
      </p>
    
      <p>
     <FooterPage/>
     </p>
     </Router>
      </div>
    );
  }
}

export default App;