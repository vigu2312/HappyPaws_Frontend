import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Row, Col, Container } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
// import './login.css';

import PetsIcon from '@material-ui/icons/Pets';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import logo from '../Navbar/Logo.png';
import axios from 'axios';

class ForgetPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            confirmPassword: '',
            passwordError: null,
            confirmPasswordError: null,
            disabled: true
        };
    }

    isSubmitDisabled = () => {
        let passwordIsValid = false;
        let confirmValid = false;

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
        if (passwordIsValid && confirmValid) {
            this.setState({
                disabled: false
            })
        }

    }
    onValueChange = (e, label) => {
        const nextState = {};
        nextState[label] = e.target.value;;
        this.setState(nextState);
    }

    onClick = () => {
        const store = JSON.parse(localStorage.getItem('login'));
        axios.put("http://localhost:5000/users/forgetPassword",{password: this.state.password},{ headers: { "Content-Type": "application/json", "x-auth-token": store.token }})
            .then(function (res) {
                if( res.status === 200 && res.statusText === 'OK') {
                   debugger;
                }

            })
            .catch(function (e) {
                console.log("ERROR ", e);
            })
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ setOpen: false })
    };

    render() {
        return (
            <div className="main">
                <div className="App">
                    <form >
                        <div>
                            <a href="/"><CloseIcon style={{ float: "right", marginRight: "20px" }} fontSize="large"></CloseIcon></a>
                            <h2 className="mainheader">
                                <img
                                    alt=""
                                    src={logo}
                                    width="35"
                                    height="35"
                                />{' '}HappyPaws</h2>

                            <h4>Forget Password</h4>
                            <Container className="centered">
                                <Row>
                                    <Col>
                                        <div>
                                            <div className="custom-class">
                                                <div className="custom-class">
                                                    <TextField className="input-class"
                                                        floatinglabeltext="Password"
                                                        type="password"
                                                        error={this.state.passwordError !== null}
                                                        helperText={this.state.passwordError}
                                                        onChange={e => this.onValueChange(e, 'password')}
                                                        id="standard-basic" required label="Password"
                                                        variant="outlined"
                                                        onBlur={this.isSubmitDisabled} /></div>
                                                <div className="custom-class">
                                                    <TextField className="input-class"
                                                        floatinglabeltext="Confirm Password"
                                                        type="password"
                                                        error={this.state.confirmPasswordError !== null}
                                                        helperText={this.state.confirmPasswordError}
                                                        onChange={e => this.onValueChange(e, 'confirmPassword')}
                                                        id="standard-basic" required label="Confirm Password"
                                                        variant="outlined"
                                                        onBlur={this.isSubmitDisabled} /></div>
                                            </div>

                                        </div>
                                        <div className="button-class">
                                            <Link to="/login">   <Button disabled={this.state.disabled} variant="primary" type="button" onClick={this.onClick} size="lg" active>
                                                Submit
                    </Button>{' '}</Link>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ForgetPassword;