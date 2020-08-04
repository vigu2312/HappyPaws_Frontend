/************
 * Author: Devam Shah 
 **********/
import React, { Component } from 'react'
import { Form, Col, Button, Row } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import './Login.css'
class RegisterView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            address1: '',
            address2: '',
            city: '',
            nameError: null,
            emailError: null,
            passwordError: null,
            confirmPasswordError: null,
            cityError: null,
            addressError: null,
            disabled: true
        }
    }
    isSubmitDisabled = () => {

        let validEmail = false;
        let passwordIsValid = false;
        let cityisValid = false;
        let addressisValid = false;
        let confirmValid = false;

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
                    emailError: "Please enter valid email!"
                });
            }
        }

        if (this.state.password === "" || !this.state.password) {
            this.setState({
                passwordError: null
            });
        } else {
            if (this.state.password.length >= 6) {
                passwordIsValid = true;
                this.setState({
                    passwordError: null
                });
            } else {
                this.setState({
                    passwordError: "Your password must be at least 6 characters"
                });
            }
        }

        if (this.state.city === "" || !this.state.city) {
            this.setState({
                cityError: null
            })
        }
        else {
            if (this.state.city === "") {
                this.setState({
                    cityError: "Enter City Name"
                })
            }
            else {
                cityisValid = true
                this.setState({
                    cityError: null
                })
            }
        }

        if (this.state.address1 === "" || !this.state.address1) {
            this.setState({
                addressError: null
            })
        }
        else {
            if (this.state.address1 === "") {
                this.setState({
                    addressError: "Enter Address"
                })
            }
            else {
                addressisValid = true
                this.setState({
                    addressError: null
                })
            }
        }

        if (this.state.confirmPassword === "" || !this.state.confirmPassword) {
            this.setState({
                confirmPasswordError: null
            })
        }
        else {
            if (this.state.confirmPassword !== this.state.password) {
                this.setState({
                    confirmPasswordError: "Password Should Match"
                })
            }
            else {
                confirmValid = true
                this.setState({
                    confirmPasswordError: null
                })
            }

        }


        if (validEmail && passwordIsValid && cityisValid && confirmValid && addressisValid) {
            this.setState({
                disabled: false
            })
        }
    }
    emailValidation = (email) => {
        return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);
    }
    onValueChange = (e, label) => {
        const nextState = {};
        nextState[label] = e.target.value;;
        this.setState(nextState);
    }

    render() {
        return (
            <React.Fragment>
                <Form className="register-form">
                    <Form.Row>
                        <Form.Group controlId="formBasicEmail" style={{ width: '100%' }}>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Form.Label style={{ width: '10rem', textAlign: 'left' }}>Email address</Form.Label>
                            </Col>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <TextField
                                    className="sample"
                                    required
                                    id="outlined-required"
                                    onChange={e => this.onValueChange(e, 'email')}
                                    helperText={this.state.emailError}
                                    error={this.state.emailError !== null}
                                    onBlur={this.isSubmitDisabled}
                                    type="email"
                                    size="small"
                                    variant="outlined"
                                    placeholder="Enter Email"
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="formBasicEmail" style={{ width: '100%' }}>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Form.Label style={{ width: '10rem', textAlign: 'left' }}>Password</Form.Label>
                            </Col>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <TextField
                                    className="sample"
                                    required
                                    id="outlined-required"
                                    onChange={e => this.onValueChange(e, 'password')}
                                    helperText={this.state.passwordError}
                                    error={this.state.passwordError !== null}
                                    onBlur={this.isSubmitDisabled}
                                    type="password"
                                    size="small"
                                    variant="outlined"
                                    placeholder="Enter Password"
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="formBasicEmail" style={{ width: '100%' }}>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Form.Label style={{ width: '10rem', textAlign: 'left' }}>Confirm Password</Form.Label>
                            </Col>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <TextField
                                    className="sample"
                                    required
                                    id="outlined-required"
                                    onChange={e => this.onValueChange(e, 'confirmPassword')}
                                    helperText={this.state.confirmPasswordError}
                                    error={this.state.confirmPasswordError !== null}
                                    onBlur={this.isSubmitDisabled}
                                    type="password"
                                    size="small"
                                    variant="outlined"
                                    placeholder="Confirm Password"
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="formBasicEmail" style={{ width: '100%' }}>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Form.Label style={{ width: '10rem', textAlign: 'left' }}>Address Line 1</Form.Label>
                            </Col>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <TextField
                                    className="sample"
                                    required
                                    id="outlined-required"
                                    onChange={e => this.onValueChange(e, 'address1')}
                                    helperText={this.state.addressError}
                                    error={this.state.addressError !== null}
                                    onBlur={this.isSubmitDisabled}
                                    type="text"
                                    size="small"
                                    variant="outlined"
                                    placeholder="Address Line 1"
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="formBasicEmail" style={{ width: '100%' }}>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Form.Label style={{ width: '10rem', textAlign: 'left' }}>Address Line 2</Form.Label>
                            </Col>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <TextField
                                    className="sample"
                                    id="outlined-required"
                                    onChange={e => this.onValueChange(e, 'address2')}
                                    onBlur={this.isSubmitDisabled}
                                    type="text"
                                    size="small"
                                    variant="outlined"
                                    
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="formBasicEmail" style={{ width: '100%' }}>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Form.Label style={{ width: '10rem', textAlign: 'left' }}>City</Form.Label>
                            </Col>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <TextField
                                    className="sample"
                                    required
                                    id="outlined-required"
                                    onChange={e => this.onValueChange(e, 'city')}
                                    helperText={this.state.cityError}
                                    error={this.state.cityError !== null}
                                    onBlur={this.isSubmitDisabled}
                                    type="text"
                                    size="small"
                                    variant="outlined"
                                    placeholder="Enter City"
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Button disabled={this.state.disabled} variant="primary" type="submit">
                            Submit
                    </Button>
                    </Form.Row>
                </Form>
            </React.Fragment>
        )
    }
}

export default RegisterView
