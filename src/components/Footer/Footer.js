import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import React, { Component }  from 'react';
import './Footer.css';

const FooterPage = () => {
    return (
      <MDBFooter className="footer">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol>
              <h5 className="title">Happy Paws</h5>
              <br/>
              <ul > <h5>About</h5>
                <li >
                  <a href="/adopt">Adoption</a>
                </li>
                <li className="list">
                  <a href="/register">Signup</a>
                </li>
                <li className="list">
                  <a href="/register">Login</a>
                </li>
                <li className="list">
                  <a href="/volunteer">Volunteer</a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol >
              
                <h5 className="title1">Contact </h5>
                <br/>
               
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer_class">
          <MDBContainer >
            &copy; {new Date().getFullYear()} Copyright: <a className = "link" href="/"> HappyPaws.com </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }

export default FooterPage;