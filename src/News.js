import React from 'react';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import './App.css';

const News = (props) => {
  return (
      <div className = "news">
    <Row>
      <Col sm="12">
        <Card body id = "card1" height="200px">
          <CardTitle><b>Feature News </b></CardTitle>
          <CardText><a href="news_story/1">Two Health Campaigns planned in August 2018</a><br></br><a href="news_story/2">Celebrating the 2017-2018 Academic Achievements</a></CardText>
          
        </Card>
      </Col>
      
    </Row>
    </div>
  );
};

export default News;