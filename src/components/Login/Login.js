import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Row, Col, Container } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import './login.css';
import PetsIcon from '@material-ui/icons/Pets';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import logo from '../Navbar/Logo.png';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            nameError: null,
            emailError: null,
            passwordError: null,
            disabled: true,
            setOpen: false,
            open: false,
        };
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

    onClick = () => {
        axios.post('http://localhost:5000/users/login', { email: this.state.email, password: this.state.password })
            .then(function (res) {
                debugger;
                if (res.status === 200 && res.statusText === 'OK') {
                    localStorage.setItem('login', JSON.stringify({
                        login: true,
                        token: res.data.token,
                        userId: res.data.user.id,
                        name: res.data.user.name,
                        email: res.data.user.email,
                    }))
                } else {
                }
            })
            .catch(function (e) {
                console.log("ERROR ", e);
            })
    }
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
                    <form  >
                        <div>
                            <a href="/"><CloseIcon style={{ float: "right", marginRight: "20px" }} fontSize="large"></CloseIcon></a>
                            <h2 className="mainheader">
                                <img
                                    alt=""
                                    src={logo}
                                    width="35"
                                    height="35"
                                />{' '}HappyPaws</h2>
                                <br/>
                                <h4>Login</h4>
                                <a href="/register">Not a member of HappyPaws? Register here</a>
                                <br/>
                            <Container className="centered">
                                <Row>
                                    <Col>
                                        <div>
                                            <div className="custom-class">
                                                <TextField className="input-class"
                                                    floatinglabeltext="Email"
                                                    type="email"
                                                    error={this.state.emailError !== null}
                                                    helperText={this.state.emailError}
                                                    onChange={e => this.onValueChange(e, 'email')}
                                                    id="standard-basic" required label="Email"
                                                    variant="outlined"
                                                    onBlur={this.isSubmitDisabled} />
                                            </div>
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
                                        </div>
                                        <div className="button-class">
                                          
                                        <Link to="/">   <Button disabled={this.state.disabled} variant="primary" type="button" onClick={this.onClick} size="lg" active>
                                                    Login
                    </Button>{' '}</Link>
                                        </div>
                                        
                                        <div style={{textAlign: 'center'}}>
                                        <a href="/forgetPassword">Forgot Password? Click here</a>
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

export default Login;