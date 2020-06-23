import React, { Component } from 'react';
import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Enquire.css';
import Footer from '../Footer/Footer';
import logo from './dog1.jpeg';
import TextField from '@material-ui/core/TextField';
import NavbarComponent from '../Navbar/Navbar';
import Icon from '@material-ui/core/Icon';

class Enquire extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        number: '',
        postal: '',
        nameError: null,
        emailError: null,
        numberError:null,
        postalError: null,
        disabled: true,

    }

    isSubmitDisabled = () => {
        let nameIsRequired = false;
        let validEmail = false;
        let validNumber = false;
        let validPostal = false;

        if (this.state.name === '' || !this.state.name) {
            nameIsRequired = false;
            this.setState({
                nameError: null
            });
        } else {
            if (this.state.name !== '') {
                nameIsRequired = true
                this.setState({
                    nameError: null
                });
            }

        }

        if (this.state.email === "") {
            this.setState({
                emailError: null
            });
        } else {
            if (this.emailValidation(this.state.email)) {
                validEmail = true
                this.setState({
                    emailError: null
                });
            } else {
                this.setState({
                    emailError: "Please enter valid email"
                });
            }
        }

        if (this.state.number.length > 10 ) {
            validNumber = false
            this.setState({
                numberError: "Enter a valid contact number"
            });
        } else {
            validNumber = true
                this.setState({
                    numberError: null
                });

        }
        
        if ( this.postalValidation(this.state.postal) ) {
            validPostal = false;
            this.setState({
                postalError: "Enter valid postal code"
            });
        } else {
            if (this.state.postal.length>6) {
                validPostal = false
                this.setState({
                    postalError: "Enter valid postal code"
                });
            }
            else{
                validPostal = true
                this.setState({
                    postalError: null
                });
            }

        }
    }

    emailValidation = (email) => {
        return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);
       
    }

    postalValidation = (postal) => {
        return new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(postal);
       
    }

    onValueChange = (e, label) => {
        const nextState = {};
        nextState[label] = e.target.value;;
        this.setState(nextState);
    }

    onSubmit = () => {
        alert("Message sent");
        console.log(this.state);
        this.props.history.push('/profile');
    }

    render() {
        return (
            <div >
                <NavbarComponent />
                <div className="bg">
                    <h3 className="font1">Enquire</h3>
                    <img className="im1" src={logo} />
                    <p className="enquire">Ask about Husky</p>
                    <br />
                    <br />
                    <p className="enquire">To Daisy Shelter</p>

                    {/* <Form className="form">
                    
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
                    </Form> */}
                    <br />
                    <Link className="enquire" to="/register">Login to Continue </Link>
                    <p className="enquire"> &nbsp; Or Enquire as a Guest</p>

                    <form className="form" onSubmit={this.onSubmit} >
                        <div>
                            <Container>
                                <Row className="row" >

                                    <TextField
                                        required
                                        error={this.state.nameError !== null}
                                        helperText={this.state.nameError}
                                        onChange={e => this.onValueChange(e, 'name')}
                                        label="First Name"
                                        onBlur={this.isSubmitDisabled} 
                                        variant="outlined"
                                    />

                                    <TextField
                                        label="Last Name"
                                        variant="outlined"
                                        />
                                </Row>

                                <Row className="row">
                                    <TextField
                                        required
                                        error={this.state.emailError !== null}
                                        helperText={this.state.emailError}
                                        onChange={e => this.onValueChange(e, 'email')}
                                        label="Email"
                                        type="email"
                                        onBlur={this.isSubmitDisabled} 
                                        variant="outlined"
                                    />
                                    <TextField
                                        label="Contact Number"
                                        type="number"
                                        error={this.state.numberError !== null}
                                        helperText={this.state.numberError}
                                        onChange={e => this.onValueChange(e, 'number')}
                                        onBlur={this.isSubmitDisabled} 
                                        variant="outlined"
                                    />
                                </Row>
                                <Row>
                                    <select className="drop">
                                        <option>Select a country</option>
                                        <option>Canada</option>
                                        <option>US</option>
                                    </select>
                                    <TextField
                                        label="Postal Code"
                                        type="text"
                                        error={this.state.postalError !== null}
                                        helperText={this.state.postalError}
                                        onChange={e => this.onValueChange(e, 'postal')}
                                        onBlur={this.isSubmitDisabled} 
                                        variant="outlined"
                                    />
                                </Row>
                                <Row>
                                    <TextField
                                        className="textarea"
                                        label="Enter your message"
                                        multiline
                                        rows={5}
                                        variant="outlined"
                                    />
                                </Row>
                                <Row>
                                <input type="submit" value="Enquire"></input>
                                       
                                </Row>            
                                </Container>

                        </div>
                    </form>
                    <Footer />
                </div>
            </div>

        );
    }
}

export default Enquire;