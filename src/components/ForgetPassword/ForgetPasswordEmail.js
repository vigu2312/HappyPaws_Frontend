import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import { Row, Col, Container } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
// import './login.css';
import PropTypes from 'prop-types';
import PetsIcon from '@material-ui/icons/Pets';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import logo from '../Navbar/Logo.png';
import axios from 'axios';
import { withRouter } from 'react-router'


class ForgetPasswordEmail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            emailError: null,
            disabled: true,
        };  
    }
    static propTypes = {
        history: PropTypes.object.isRequired
      }

    isSubmitDisabled = () => {
        let validEmail = false;

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
        if (validEmail ) {
                this.setState({
                    disabled: false
                });

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
       
        axios.post('http://localhost:5000/users/forgetPasswordMail', { email: this.state.email})
            .then(res => {
                if (res.status === 200 && res.statusText === 'OK') {
                    // localStorage.setItem('login', JSON.stringify({
                    //     login: true,
                    //     token: res.data.token,
                    //     userId: res.data.user.id,
                    //     name: res.data.user.name,
                    //     email: res.data.user.email,
                    // }))
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
                            <br />
                            <h4>Forget Password</h4>
                            <Container className="centered">
                                <Row>
                                    <Col>
                                        <div>
                                            <div className="custom-class">
                                                <TextField className="input-class"
                                                    floatinglabeltext="Registered Email"
                                                    type="email"
                                                    error={this.state.emailError !== null}
                                                    helperText={this.state.emailError}
                                                    onChange={e => this.onValueChange(e, 'email')}
                                                    id="standard-basic" required label="Registered Email"
                                                    variant="outlined"
                                                    onBlur={this.isSubmitDisabled} />
                                            </div>
                                        </div>
                                        <div className="button-class">

                                              <Button disabled={this.state.disabled} variant="primary" type="button" onClick={this.onClick} size="lg" active>
                                                Submit
                    </Button>{' '}
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
export default ForgetPasswordEmail;