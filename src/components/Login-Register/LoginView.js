/************
 * Author: Devam Shah 
 **********/

import React, { Component } from 'react'
import { Form, Col, Button } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import './Login.css'

class LoginView extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            nameError: null,
            emailError: null,
            passwordError: null,
            disabled: true
        }
    }
    isSubmitDisabled = () => {

        let validEmail = false;
        let passwordIsValid = false;

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

        if (validEmail && passwordIsValid) {
            if (this.state.name === '') {
                this.setState({
                    nameError: "Please enter name"
                });
            } else if (validEmail && passwordIsValid) {
                this.setState({
                    disabled: false
                });
            }

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

    onSubmit = () => {
    }
    render() {
        return (
            <React.Fragment>
                <Form className="login-form">
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
                                    placeholder="John.Doe@gmail.com"
                                />
                            </Col>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group controlId="formBasicPassword" style={{ width: '100%' }}>
                            <Col lg={4} md={4} sm={12} xs={12}>
                                <Form.Label style={{ width: '10rem', textAlign: 'left' }}>Password</Form.Label>
                            </Col>
                            <Col lg={8} md={8} sm={12} xs={12}>
                                <TextField
                                    className="sample"
                                    required
                                    id="outlined-required"
                                    type="password"
                                    size="small"
                                    error={this.state.passwordError !== null}
                                    helperText={this.state.passwordError}
                                    onChange={e => this.onValueChange(e, 'password')}
                                    variant="outlined"
                                    placeholder="Enter Password"
                                    onBlur={this.isSubmitDisabled}
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

export default LoginView
