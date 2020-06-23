import React, { Component } from 'react';
import {Button, Carousel, Jumbotron, Col, Image, Row, Card } from 'react-bootstrap';
import './login.css';

class Home extends Component {
    render() { 
        return ( 
            <React.Fragment>
                {/* Set the Carousel for the home */}
                <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src='images/image1.jpg'
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Adopt, Don't Shop</h3>
                    <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="images/image2.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Connect with us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="images/image3.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Find the nearest pet</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>

                {/* Set up section for volunteer opportunities */}

                <Jumbotron fluid className="jumbo" >
                <Row>
                    <Col xs={6} md={4}> 
                    <Image src="images/volunteer.jpg" height="80%" width="80%" roundedCircle />
                    </Col>
                    <Col xs={12} md={8}>
                    <h1>Volunteer for events</h1>
                    <p>
                        Help the nearby shelter community with their different events. Find a relavant opportunity for you.
                    </p>
                    <p>
                    < Button variant="primary">Volunteer Today</Button>
                    </p>
                </Col>
                </Row>
                </Jumbotron>

                {/* Card views */}
                <Row>
                <Col sm={4} md={4} className="card-center">
                    <Card className="m-2" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/shareStory.jpg" height="200px" width="250px" />
                    <Card.Body className="nav-background">
                        <Card.Title>Read the success stories</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ligula 
                        eget purus varius molestie. Donec porttitor condimentum turpis, et placerat neque posuere in. 
                        </Card.Text>
                        <Button variant="outline-info">Read More</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col sm={4} md={4} className="card-center">
                    <Card className="text-centered" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="images/donate.jpg" height="200px" width="250px" />
                    <Card.Body className="nav-background">
                        <Card.Title>Donate and help</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ligula 
                        eget purus varius molestie. Donec porttitor condimentum turpis, et placerat neque posuere in. 
                        </Card.Text>
                        <Button variant="outline-info">Learn More</Button>
                    </Card.Body>
                    </Card>
                </Col>

                <Col sm={4} md={4} className="card-center">
                    <Card style={{ width: '18rem' , align:'center'}}>
                    <Card.Img variant="top" src="images/reviews.jpg" height="200px" width="250px" />
                    <Card.Body className="nav-background" >
                        <Card.Title className="centered" >View Ratings and Reviews</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis ligula 
                        eget purus varius molestie. Donec porttitor condimentum turpis, et placerat neque posuere in. 
                        
                        </Card.Text>
                        <Button variant="outline-info">Learn More</Button>
                    </Card.Body>
                    </Card>
                </Col>
                </Row>
            </React.Fragment>
         );
    }
}
 
export default Home;