import React from 'react';
import 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { Card, CardTitle, CardText, Col } from 'reactstrap';
import './App.css';
class Slider extends React.Component {
  render() {
    return (
      
      <div>
      <div>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="http://www.sagiusa.org/wp-content/uploads/2018/01/Hands-Joining.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h1>Active solidarity</h1>
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
      <h1>The last journey back to motherland</h1>
      <p>Gone but never forgotten</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<div className='container'>
<div className='row'>
    <div className='col'>
    <div data-overlay="true" class="panel-row-style panel-row-style-for-1760-0 serv">
    <div id="pgc-1760-0-0" class="panel-grid-cell">
    <div id="panel-1760-0-0-0" class="so-panel widget widget_sydney_services_type_a sydney_services_widget panel-first-child panel-last-child" data-index="0">			
    <h3 class="widget-title">Our Services</h3>
		<p>  </p>																											
    <div className="row">
    <div class="service col-md-4">
		<div class="roll-icon-box">
		<div class="icon">
		<i class="fa fa-user-circle"></i>
    </div>
		<div class="content">
		<h3>OUTREACH</h3>
		<p>SAGI is working to bring all Cameroonians together, that are grouped within different associations existing in the United States of America, without distinction of age, race, tribe, or religion for the sole purpose of helping each other in case one of us happens to die.</p>
    </div>	
							</div>
						</div>
																													<div class="service col-md-4">
													<div class="roll-icon-box">
											
									<div class="icon">
																					<i class="fa fa-pen"></i>																			</div>
																<div class="content">
									<h3>
																					STRATEGY																			</h3>
																	
										<p>Alleviate the financial burden of losing a loved one from the Cameroonian community, if the family chooses to send the remains back home to Cameroon.&nbsp; SAGI’s strategy is to have enough members in order to reduce the amount each member will contribute to $1.00.</p>
																	</div>	
							</div>
						</div>
																													<div class="service col-md-4">
													<div class="roll-icon-box">
											
									<div class="icon">
																					<i class="fa fa-plane"></i>																			</div>
																<div class="content">
									<h3>
																					MISSION																			</h3>
																	
										<p>First, to facilitate the repatriation of the SAGI member, deceased in the USA or abroad (except Cameroon) to Cameroon. Second, collect all contributions of each member, through their association. And third, transfer all funds collected to the funeral home or family for repatriation.</p>
																	</div>
							</div>
						</div>
					
            </div>	
	</div>
  </div>
  </div>  
  </div>
  <Col id='announcements'>
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