/************
 * Author: Ramya Ramathas
 **********/

 import React, { Component } from 'react';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
import { Row, Col, Container, Card } from 'react-bootstrap';
import './profile.css';
import NavbarComponent from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import * as utils from '../../baseUrl';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            id: this.props.match.params.id,
            doneLoading: false

        }
    }

    //get api is called after collecting the id from search page to access the specific pet details based on ID
    componentDidMount() {
        const id1 = this.state.id
            axios.get(utils.baseUrl + 'profile/' + id1)
                .then(res => {
                    this.setState({ pets: res.data });
                }).then(()=>{
                    this.setState({
                        doneLoading: true
                    })
                })
    }

    //onclick function to redirect to enquire page 
    enquire = (e, id) => {
        this.props.history.push({
            pathname: '/enquire/'+this.state.id

        });
    };

    //onclick function to redirect to sponsor page
    sponsor = (e, id) => {
        this.props.history.push({
            pathname: '/sponsor/'+this.state.id
        });
    };

    render() {
        let pet = this.state.pets;
        const id = pet._id
        //profile web page displayed
        return (
            <div className="home-component">
            {this.state.doneLoading? (
                <div>
                <NavbarComponent />
                <h4 className="font1">Pet Profile</h4>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="img"
                            src={pet.image}
                            alt="First slide"

                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img"
                            src={pet.image1}
                            alt="Third slide"

                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="img"
                            src={pet.image2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <Container>
                    <Card className="card1">

                        <Row>
                            <Col>
                                <h2 className="font1">{pet.name}</h2>

                                <ul className="a">
                                    <li className="font1"> &#128062; {pet.type}</li>
                                    <li className="font1"> &#128062; {pet.gender}</li>
                                    <li className="font1"> &#128062; {pet.color}</li></ul>
                            </Col>
                        </Row>
                        <Row >

                            <Col xs={12} sm={12} md={6} lg={6} fluid={true}>

                                <h4 className="font2">About</h4>
                                <div className="about-text">
                                    {pet.description}
                                </div>
                            </Col>


                            <Col xs={12} sm={12} md={6} lg={6}>
                                <div className="font">

                                    <Card style={{ width: '25rem' }} className="card">
                                        <Card.Body>
                                            <Card.Title>Help {pet.name} find a home</Card.Title>
                                            <Button variant="outline-info" className="button" onClick={() => this.props.history.push('/adopt')}>Adopt</Button>{' '}
                                            <br />
                                            <Button variant="outline-secondary" className="button" onClick={(e, f = { id }) => this.enquire(e, f = { id })}>Enquire</Button>{' '}
                                            <br />

                                        </Card.Body>
                                        <ButtonGroup>
                                            <Button variant="info" onClick={(e, f = { id }) => this.sponsor(e, f = { id })}>Sponsor</Button>
                                            <Button variant="secondary">Share</Button>
                                        </ButtonGroup>
                                    </Card>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>
                <center>

                </center>

                <Footer />
                </div>
            ) : (<div/>)}
            </div>

        );

    }


}

export default Register;