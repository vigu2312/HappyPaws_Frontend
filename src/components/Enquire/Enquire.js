import React, { Component } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Enquire.css';
import Footer from '../Footer/Footer';
import logo from './dog1.jpeg';
import NavbarComponent from '../Navbar/Navbar';

class Enquire extends Component {
    render() {
        return (
                <div >
                   <NavbarComponent/> 
                    <div className="bg">
                             <h3 className="title">Enquire</h3>
                            <img className="im1" src={logo} />
                            <p className="enquire">Ask about Husky</p>
                             <br/>
                        <br/>
                        <p className="enquire">To Daisy Shelter</p>

                    <Form className="form">
                    
                        <Form.Row>
                            
                            <Form.Group className="group" >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" />
                            </Form.Group>

                            <Form.Group className="group">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group className="group" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="group">
                                <Form.Label>Contact number</Form.Label>
                                <Form.Control type="text" placeholder="Enter contact number" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row className="row1">

                            <Form.Group className="group">
                                <Form.Label>Country</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option >Canada</option>
                                    <option>US</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group className="group2">
                                <Form.Label>Zip Code</Form.Label>
                                <Form.Control type="text" placeholder="Enter postal code" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group className="group">
                                <Form.Label>Please enter your message here (Max Length:1000 characters)</Form.Label>
                                <br />
                                <textarea maxLength="1000">I would like to enquire....</textarea>
                            </Form.Group>
                        </Form.Row>


                        <Button className="btn1" type="submit">
                            Enquire
  </Button>
                    </Form>
                
                <Footer />
                </div>
            </div>

        );
    }
}

export default Enquire;