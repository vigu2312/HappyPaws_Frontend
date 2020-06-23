import React, { Component } from 'react';
import {Nav, Navbar, Image} from 'react-bootstrap';

class NavBar extends Component {
    state = {  }
    render() { 
        let loginVar, registerVar, sep, uname;
  
        if(true){
            loginVar="Login"
            registerVar="Register"
            sep="/"
        } else{
          loginVar= uname;
        }
          
            return (             
              
              <React.Fragment>
              <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
              HappyPaws <Image src="images/logo.jpg" height="30" width="30" />
              
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/search">Find a Pet</Nav.Link> 
                <Nav.Link href="/path-not found"> Partner with Us </Nav.Link>
                <Nav.Link href="/contactus"> Contact Us </Nav.Link>
                <Nav.Link href="/path-not-found"> About Us </Nav.Link>
              </Nav>
              
            <Nav.Link className="mr-sm-2" href="/login"> Login</Nav.Link> /
              <Nav.Link className="mr-sm-2" href="/register"> Register</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
          </React.Fragment>
         );
    }
}
 
export default NavBar;