import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import PetsIcon from '@material-ui/icons/Pets';

class NavbarComponent extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="lg" >
                    <Navbar.Brand as={Link} to="/"><PetsIcon fontSize="large" />HappyPaws</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link  as={Link} to="/donation">Donation</Nav.Link>
                            <Nav.Link href="#link" onClick={() => alert("Under Construction")} >Pet Care</Nav.Link>
                            <Nav.Link as={Link} to="/share" className="my-active">Share your Story</Nav.Link>
                            <NavDropdown title="Find Shelter" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => alert("Under Construction")}  href="#action/3.1">Sponser a Pet</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => alert("Under Construction")}  href="#action/3.2">Volunteer</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => alert("Under Construction")}  href="#action/3.4">See our stories</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#contact" onClick={() => alert("Under Construction")} >Contact Us</Nav.Link>
                        </Nav>
                        <Form inline>
                            <Link to="/register"><Button variant="light">Register</Button></Link>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComponent;