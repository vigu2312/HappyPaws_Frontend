import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Row, Col, Container } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import './login.css';
import PropTypes from 'prop-types';
import PetsIcon from '@material-ui/icons/Pets';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import logo from '../Navbar/Logo.png';
import axios from 'axios';
import { withRouter } from 'react-router';
import Snackbar from '@material-ui/core/Snackbar';

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
            open: false,
            vertical: 'bottom',
            horizontal: 'center',
        };
    }
    static propTypes = {
        history: PropTypes.object.isRequired
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
    
    handleClose = () => {
        this.setState({ open: false });
       
      };


    onClick = () => {
        axios.post('http://localhost:5000/users/login', { email: this.state.email, password: this.state.password })
            .then(res => {
                if (res.status === 200 && res.statusText === 'OK') {
                    this.setState({
                        open: true
                    })
                    localStorage.setItem('login', JSON.stringify({
                        login: true,
                        token: res.data.token,
                        userId: res.data.user.id,
                        name: res.data.user.name,
                        email: res.data.user.email,
                    }))
                    this.props.history.push("/")
                    
                } else {

                }
            })
            .catch(function (e) {
                console.log("ERROR ", e);
            })
    }

    render() {
        const { vertical, horizontal } = this.state
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
                            <br />
                            <h4>Login</h4>
                            <a href="/register">Not a member of HappyPaws? Register here</a>
                            <br />
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

                                            <Button disabled={this.state.disabled} variant="primary" type="button" onClick={this.onClick} size="lg" active>
                                                Login
                    </Button>{' '}
                                        </div>
                                        <div style={{ textAlign: 'center' }}>
                                            <a href="/forgetPasswordEmail">Forgot Password? Click here</a>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </form>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={this.state.open}
                    onClose={this.handleClose}
                    message="Logged out successfully !!"
                    autoHideDuration={1000}
                    key={vertical + horizontal}></Snackbar>
            </div>
        );
    }
}
Login = withRouter(Login);
export default Login;
// export default withRouter(Login);