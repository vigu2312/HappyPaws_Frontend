import React, { Component } from 'react'
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Profile from '../../Profile.jpg'
import './UserProfile.css'

class AboutMe extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             country: '',
             province: ''
        }
    }
    
     Country = [
        {
            value: 'United States of America',
              label: 'USA',
        },
        {
            value: 'Canada',
              label: 'CAN',
        },
        {
            value: 'Other',
              label: 'Other',
        }
    ];
     Province = [
        {
            value: 'Ontario',
              label: 'ON',
        },
        {
            value: 'Alberta',
              label: 'AB',
        },
        {
            value: 'British Coloumbia',
              label: 'BC',
        },
        {
            value: 'Manitoba',
              label: 'MB',
        },
        {
            value: 'NovaScotia',
              label: 'NS',
        },
        {
            value: 'Quebec',
              label: 'QC',
        }
    ];

    handleCountryChange = (event) => {
        this.setState({
            country: event.target.value,
            province: event.target.value
        })
        // setProvince(event.target.value);
    };
    handleProvinceChange = (event) => {
        this.setState({
            // country: event.target.value,
            province: event.target.value
        })
        // setProvince(event.target.value);
    };
    render() {
        const country = this.state.country
    const province = this.state.province
        return (
            <div>
                <Row className="content-left">
                    <h5>What is your name?</h5>
                </Row >
                <Row className="content-left" style={{ textAlign: 'left' }}>
                    <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding margin-bottom">
                        <TextField style={{ width: '90%' }}
                            required
                            id="outlined-required"
                            label="First Name"
                            placeholder="John"
                            variant="outlined"
                        />
                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding ">
                        <TextField style={{ width: '90%' }}
                            required
                            id="outlined-required"
                            label="Last Name"
                            placeholder="Doe"
                            variant="outlined"
                        />
                    </Col>
                </Row>
                <Row className="content-left">
                    <h5>How can you be reached?</h5>
                </Row >
                <Row className="content-left" style={{ textAlign: 'left' }}>
                    <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                        <TextField style={{ width: '90%' }}
                            id="outlined"
                            label="Phone Number"
                            // placeholder="John"
                            variant="outlined"
                        />
                    </Col>
                </Row>
                <Row className="content-left">
                    <h5>Where do you live?</h5>
                </Row >
                <Row className="content-left" style={{ textAlign: 'left' }}>
                    <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                        <TextField style={{ width: '90%' }}
                            id="outlined-select-currency-native"
                            select
                            label="Country"
                            value={country}
                            onChange={this.handleCountryChange}
                            SelectProps={{
                                native: true,
                            }}
                            // helperText="Please select your currency"
                            variant="outlined"
                        >
                            {this.Country.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Col>
                </Row>
                <Row className="content-left" style={{ textAlign: 'left' }}>
                    <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding margin-bottom">
                        <TextField style={{ width: '90%' }}
                            id="outlined"
                            label="Street Address 1"
                            // placeholder="John"
                            variant="outlined"
                        />
                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                        <TextField style={{ width: '90%' }}
                            id="outlined"
                            label="Street Address 2"
                            // placeholder="John"
                            variant="outlined"
                        />
                    </Col>
                </Row>
                <Row className="content-left" style={{ textAlign: 'left' }} >
                    <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding margin-bottom">
                        <TextField style={{ width: '90%' }}
                            id="outlined"
                            label="City"
                            // placeholder="John"
                            variant="outlined"
                        />
                    </Col>
                    <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                        <TextField style={{ width: '90%' }}
                            id="outlined-select-currency-native"
                            select
                            label="Province"
                            value={province}
                            onChange={this.handleProvinceChange}
                            SelectProps={{
                                native: true,
                            }}
                            // helperText="Please select your currency"
                            variant="outlined"
                        >
                            {this.Province.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Col>
                </Row>
                <Row className="content-left" style={{ textAlign: 'left' }}>
                    <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                        <TextField style={{ width: '90%' }}
                            id="outlined"
                            label="Postal Code"
                            // placeholder="John"
                            variant="outlined"
                        />
                    </Col>
                </Row>

            </div>
        )
    }
}

export default AboutMe
