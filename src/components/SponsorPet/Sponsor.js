import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap'
import SponsorDog from '../../DogSponsor.jpg';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Row, Col, Container, Dropdown, DropdownButton } from 'react-bootstrap'
import CreditCardInput from 'react-credit-card-input';
import './Sponsor.css';
import NavbarComponent from '../Navbar/Navbar';



class Sponsor extends Component {
    render() {

        return (
            <React.Fragment>
            <NavbarComponent />
            <div className="sponsor-root">
                <div className="pet-info">
                    <div className="pet-image-info">
                        <img className="pet-image" src={SponsorDog}></img>
                    </div>

                    <div className="pet-description-info">
                        <div className="pet-description-title">
                            <p style={{ fontSize: '1.3rem', fontWeight: '500' }}>Something About Me!</p>
                            <hr></hr>
                        </div>
                        <p>Esse reprehenderit ullamco ipsum irure elit sunt velit non anim sit nisi labore non. Sint ea Lorem minim ex enim adipisicing mollit duis eiusmod consectetur aute. Eu ex Lorem commodo non.</p>
                    </div>
                </div>
                <div className="vertical-line">
                    <hr className="vertical-line-item"></hr>
                </div>
                <div className="payment-info">

                    <div className="payment-outline">
                        <div className="payment-main">
                            <div className="payment-google-button">
                                <Button variant="dark" block>
                                    <i class="fab fa-google-pay fa-2x"></i></Button>
                            </div>
                            <hr></hr>
                            <div className="payment-details">
                                <Form>
                                    <Form.Group>
                                        <Form.Row>
                                            <Form.Label className="labelClass">Email</Form.Label>
                                        </Form.Row>
                                        <Form.Row>
                                            <TextField
                                                className="sample"
                                                required
                                                id="outlined-required"
                                                type = "email"
                                                size="small"
                                                variant="outlined"
                                                placeholder="John.Doe@gmail.com"
                                            />
                                        </Form.Row>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Row>
                                            <Form.Label className="labelClass">Card Information</Form.Label>
                                        </Form.Row>
                                        <Form.Row>
                                            <CreditCardInput
                                                fieldClassName="input"
                                            />

                                            {/* <i class="fab fa-cc-visa" style={{ position: 'relative', marginLeft: '95%' }}></i>
                                            <TextField
                                                className="sample"
                                                required
                                                id="outlined-required"
                                                size="small"
                                                variant="outlined"
                                                type="text"
                                                placeholder="1234 1234 1234 1234"
                                            ></TextField> */}
                                        </Form.Row>
                                        {/* <Form.Row>
                                            <Col style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                                <TextField
                                                    required
                                                    id="outlined-required"
                                                    size="small"
                                                    variant="outlined"
                                                    placeholder="MM/YY"
                                                />
                                            </Col> */}
                                        {/* <Col style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                                <TextField

                                                    required
                                                    id="outlined-required"
                                                    size="small"
                                                    variant="outlined"
                                                    placeholder="CVC"
                                                />
                                            </Col> */}
                                        {/* </Form.Row> */}

                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Row>
                                            <Form.Label className="labelClass">Name On Card</Form.Label>
                                        </Form.Row>
                                        <Form.Row>
                                            <TextField
                                                className="sample"
                                                required
                                                id="outlined-required"

                                                size="small"
                                                variant="outlined"
                                                placeholder="John Doe"
                                            />
                                        </Form.Row>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Row>
                                            <Form.Label className="labelClass">Billing Address</Form.Label>
                                        </Form.Row>
                                        <Form.Row>
                                            <DropdownButton id="dropdown-item-button" title="Country" variant="secondary">
                                                <Dropdown.Item as="button">Canada</Dropdown.Item>
                                                <Dropdown.Item as="button">USA</Dropdown.Item>
                                                <Dropdown.Item as="button">Something else</Dropdown.Item>
                                            </DropdownButton>
                                        </Form.Row>
                                        <Form.Row>
                                            <TextField
                                                className="sample"
                                                required
                                                id="outlined-required"

                                                size="small"
                                                variant="outlined"
                                                placeholder="Address Line 1"
                                            />
                                        </Form.Row>
                                        <Form.Row>
                                            <TextField
                                                className="sample"
                                                id="outlined-required"

                                                size="small"
                                                variant="outlined"
                                                placeholder="Address Line 2"
                                            />
                                        </Form.Row>

                                        <Form.Row>
                                            <Col style={{ paddingLeft: '0px', paddingRight: '0px' }} >
                                                <TextField
                                                    className="sample"
                                                    id="outlined-required"
                                                    required
                                                    size="small"
                                                    variant="outlined"
                                                    placeholder="City"
                                                />
                                            </Col>
                                            <Col style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                                                <TextField
                                                    className="sample"
                                                    id="outlined-required"
                                                    required
                                                    size="small"
                                                    variant="outlined"
                                                    placeholder="Postal Code"
                                                />
                                            </Col>
                                        </Form.Row>
                                        <Form.Row>
                                            <TextField
                                                className="sample"
                                                required
                                                id="outlined-required"
                                                required
                                                size="small"
                                                variant="outlined"
                                                placeholder="State"
                                            />
                                        </Form.Row>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Row>
                                        </Form.Row>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Row>
                                            <Button style={{ width: '100%' }} variant="primary">Support Me!</Button>
                                        </Form.Row>
                                    </Form.Group>
                                </Form>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
            </React.Fragment>
        )
    }
}

export default Sponsor
