import React, { Component } from 'react';
import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Head from './Head';
import 'react-bootstrap';
import FooterPage from './FooterPage';
//import Slider from './Slider';

import { BrowserRouter as Router} from 'react-router-dom';
<<<<<<< HEAD
//import Route from 'react-router-dom/Router'
=======
//import Route from 'react-router-dom/Route'
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
import Pbody from './Pbody';


//import { Nav } from 'react-bootstrap';
//import Nav from './Nav';


class App extends Component {
  render() {
    return (
      <div className='App' >
<<<<<<< HEAD
        <Router>
         
            <Head/>
         
            <Pbody/>
         
         
            <FooterPage/>
         
        </Router>
=======
      <Router>
         
            <Head/>
           
         
            <Pbody/>
            
         
            <FooterPage/>
         
     </Router>
>>>>>>> 724d4239cc107e97e39ba11ce97bc877928ea2b9
      </div>
    );
  }
}

export default App;