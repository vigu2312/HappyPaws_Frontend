import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './LogoWhite.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { Form, Button } from 'react-bootstrap';
import Login from '../Login-Register/Login';
import axios from 'axios';

class NavbarComponent extends Component {
    constructor(props) {
        super(props)
debugger;
        this.state = {
            addModalShow: false,
            store: JSON.parse(localStorage.getItem('login'))
        }
        this.showLoginModal = this.showLoginModal.bind(this);
    }
    componentWillMount() {
        debugger;
        this.setState({store: JSON.parse(localStorage.getItem('login'))})
    }

    showLoginModal = () => {
        this.setState({
            addModalShow: true
        })
        console.log("Register" + this.state.addModalShow)
    }

    LoginModalClose = () => {
        this.setState({
            addModalShow: false
        })
    }


    onClickLogout = () => {
        const store = JSON.parse(localStorage.getItem('login'));
        axios.get("http://localhost:5000/users/logout", { headers: { "Content-Type": "application/json", "x-auth-token": store.token } })
            .then(res => {
                debugger;
                localStorage.clear();
                this.setState({
                    store: null
                })
            })

    }

    render() {
        // const { isFetching } = this.state;
        // const LoginModal = this.state.addModalShow
        // console.log("Render" + LoginModal)
        return (
            <div>
                <Navbar className="navbar_bg" expand="lg" >
                    <Navbar.Brand as={Link} to="/">
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
                                <NavDropdown.Item as={Link} to="/volunteer" >Volunteer</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={() => alert("Under Construction")} href="#action/3.4">See our stories</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>


                        </Nav>
                        <Form >
                            <NavDropdown title="Settings" className="marginProfile" id="basic-nav-dropdown">

                                <NavDropdown.Item as={Link} to={this.state.store === null? "/login": "/editProfile"}>{this.state.store === null ? "Login" : "EditProfile"}</NavDropdown.Item>

                                {/* <NavDropdown.Item as={Link} to="/editProfile" >Edit Profile</NavDropdown.Item> */}
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={this.onClickLogout} >{this.state.store === null ? "" : "Logout"}</NavDropdown.Item>
                                {/* <NavDropdown.Item onClick = {this.showLoginModal}>Login</NavDropdown.Item> */}
                            </NavDropdown>

                        </Form>
                        {/* <div className = "modal-show">
                            <Login 
                            show = {LoginModal} 
                            onHide = {this.LoginModalClose}>                                
                            </Login>
                        </div> */}
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComponent;