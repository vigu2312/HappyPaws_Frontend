import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './Logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { Form, Button } from 'react-bootstrap';
import Login from '../Login-Register/Login';

class NavbarComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addModalShow: false
        }
        this.showLoginModal = this.showLoginModal.bind(this);
    }

    showLoginModal = () => {
        this.setState({
            addModalShow : true
        })
        console.log("Register" + this.state.addModalShow)
    }

    LoginModalClose = () => {
        this.setState({
            addModalShow:false
        })
    }

    render() {
        const { isFetching } = this.state;
        const LoginModal = this.state.addModalShow

        return (
            <div>
                <Navbar className="navbar_bg" expand="lg" >
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={logo}
                            width="35"
                            height="35"
                        />{' '}
                        Happy Paws</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/donation">Donation</Nav.Link>
                            <Nav.Link as={Link} to="/search">Find a Pet</Nav.Link>
                            <Nav.Link as={Link} to="/petCare">Pet Care</Nav.Link>
                            <Nav.Link as={Link} to="/share" className="my-active">Share your Story</Nav.Link>
                            <NavDropdown title="Support Us" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => alert("Under Construction")} href="#action/3.2">Volunteer</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => alert("Under Construction")} href="#action/3.4">See our stories</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/contactus"  >Contact Us</Nav.Link>
                            {/* <Nav.Link as ={Link} to="/enquire" >Enquire</Nav.Link> */}
                          
                        </Nav>
                        <Form inline>
                            <button variant="light" onClick={this.showLoginModal}>Register</button>
                            <div className = "modal-show">
                            <Login 
                            show = {LoginModal} 
                            onHide = {this.LoginModalClose}>                                
                            </Login>
                        </div>

                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComponent;