import React from 'react';
import 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { Card, CardTitle, CardText, Col } from 'reactstrap';
import './App.css';
class Slider extends React.Component {
  render() {
    return (
      <div className = 'container'>
      <div className='row .row-eq-height'>
      <div className='col'>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.sagiusa.org/wp-content/uploads/2018/01/Hands-Joining.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Active solidarity</h3>
      <p>Lets join hands to help</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.sagiusa.org/wp-content/uploads/2018/01/Air-Plane.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>The last journey back to motherland</h3>
      <p>Gone but never forgotten</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<div className='col'>
      <Col id = "abcd-custom">
      <Card body id = "card2">
        <CardTitle><b>Announcements</b></CardTitle>
        <CardText>Announcements here!<br></br><p></p></CardText>
          <CardTitle><b>Feature News </b></CardTitle>
          <CardText><a href="news_story/1">Two Health Campaigns planned in August 2018</a><br></br><a href="news_story/2">Celebrating the 2017-2018 Academic Achievements</a></CardText>
          
        
      </Card>
    </Col>
    </div>
    </div>
    </div>
    );
  }
}

export default Slider;