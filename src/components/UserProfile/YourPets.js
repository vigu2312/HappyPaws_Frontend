/************
 * Author: Devam Shah 
 **********/

import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';

class YourPets extends Component {
    constructor(props) {
        super(props)

        this.state = {
            primaryBreed: '',
            Month: '',
            Year: '',
            petOrigin: ''
        }
    }
    PrimaryBreed = [
        {
            value: 'Bulldog',
            label: 'USA',
        },
        {
            value: 'Husky',
            label: 'CAN',
        },
        {
            value: 'Golden Retriever',
            label: 'Other',
        },
        {
            value: 'German Shepherd',
            label: 'Other',
        }
    ];
    PetOrigin = [
        {
            value: 'Shelter Home'
        },
        {
            value: 'Rescue',
        },
        {
            value: 'Pet Store',
        },
        {
            value: 'Breeder',
        }
    ];
    BirthDate = [
        {
            value: '1',
            Year: '2010',
        },
        {
            value: '2',
            Year: '2011',
        },
        {
            value: '3',
            Year: '2012',
        },
        {
            value: '4',
            Year: '2013',
        },
        {
            value: '5',
            Year: '2014',
        },
        {
            value: '6',
            Year: '2015',
        },
        {
            value: '7',
            Year: '2016',
        },
        {
            value: '8',
            Year: '2017',
        },
        {
            value: '9',
            Year: '2018',
        },
        {
            value: '10',
            Year: '2019',
        },
        {
            value: '11',
            Year: '2020',
        },
        {
            value: '12',
            Year: '2021',
        }
    ];
    handlePrimaryBreed = (event) => {
        this.setState({
            primaryBreed: event.target.value,
        })
    };
    handleBirth = (event) => {
        this.setState({
            Month: event.target.value,
        })
    };
    handleYear = (event) => {
        this.setState({
            Year: event.target.value,
        })
    };
    handleOrigin = (event) => {
        this.setState({
            petOrigin: event.target.value,
        })
    };
    

    render() {
        const primaryBreed = this.state.primaryBreed
        const Month = this.state.Month
        const Year = this.state.Year
        const Origin = this.state.petOrigin

        function addPets() {
            return (
                <Row className="content-left" style={{ textAlign: 'left' }}>
                        <div className="your-pet-root">
                            <Row className="content-left padding-zero-bot" style={{ textAlign: 'left' }}>
                                <h6>Pet Name</h6>
                            </Row>
                            <Row className="content-left" style={{ textAlign: 'left' }}>
                                <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                    <TextField style={{ width: '90%' }}
                                        id="outlined"
    
                                        // placeholder="John"
                                        variant="outlined"
                                    />
                                </Col>
                            </Row>
                            <Row className="content-left padding-zero-bot" style={{ textAlign: 'left' }}>
                                <h6>Primary Breed</h6>
                            </Row>
                            <Row className="content-left" style={{ textAlign: 'left' }}>
                                <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                    <TextField style={{ width: '90%' }}
                                        id="outlined-select-breed-native"
                                        select
                                        value={primaryBreed}
                                        onChange={this.handlePrimaryBreed}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="outlined"
                                    >
                                        {this.PrimaryBreed.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.value}
                                            </option>
                                        ))}
                                    </TextField>
                                </Col>
                            </Row>
                            <Row className="content-left padding-zero-bot" style={{ textAlign: 'left' }}>
                                <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                    <h6>Birth Month</h6>
                                </Col>
                                <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                    <h6>Birth Year</h6>
                                </Col>
                            </Row>
                            <Row className="content-left" style={{ textAlign: 'left' }}>
                                <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                    <TextField style={{ width: '90%' }}
                                        id="outlined-select-breed-native"
                                        select
                                        value={Month}
                                        onChange={this.handleBirth}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="outlined"
                                    >
                                        {this.BirthDate.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.value}
                                            </option>
                                        ))}
                                    </TextField>
                                </Col>
                                <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                    <TextField style={{ width: '90%' }}
                                        id="outlined-select-breed-native"
                                        select
    
                                        value={Year}
                                        onChange={this.handleYear}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="outlined"
                                    >
                                        {this.BirthDate.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.Year}
                                            </option>
                                        ))}
                                    </TextField>
                                </Col>
                            </Row>
                            <Row className="content-left padding-zero-bot" style={{ textAlign: 'left' }}>
                                <h6>Where did your pet come from?</h6>
                            </Row>
                            <Row className="content-left padding-zero-bot" style={{ textAlign: 'left' }}>
                                <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                    <TextField style={{ width: '90%' }}
                                        id="outlined-select-breed-native"
                                        select
                                        value={Origin}
                                        onChange={this.handleOrigin}
                                        SelectProps={{
                                            native: true,
                                        }}
                                        variant="outlined"
                                    >
                                        {this.PetOrigin.map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.value}
                                            </option>
                                        ))}
                                    </TextField>
                                </Col>
                            </Row>
                        </div>
                    </Row>
            )
        }
        return (
            <React.Fragment>
                <Row className="content-left" style={{ textAlign: 'left' }}>
                <Button style={{ width: '50rem' }} variant="primary" onClick = {addPets}>Add A Pet</Button>
                </Row>
                <Row className="content-left" style={{ textAlign: 'left' }}>
                    <div className="your-pet-root">
                        <Row className="content-left padding-zero-bot" style={{ textAlign: 'left' }}>
                            <h6>Pet Name</h6>
                        </Row>
                        <Row className="content-left" style={{ textAlign: 'left' }}>
                            <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                <TextField style={{ width: '90%' }}
                                    id="outlined"

                                    // placeholder="John"
                                    variant="outlined"
                                />
                            </Col>
                        </Row>
                        <Row className="content-left padding-zero-bot" style={{ textAlign: 'left' }}>
                            <h6>Primary Breed</h6>
                        </Row>
                        <Row className="content-left" style={{ textAlign: 'left' }}>
                            <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                <TextField style={{ width: '90%' }}
                                    id="outlined-select-breed-native"
                                    select
                                    value={primaryBreed}
                                    onChange={this.handlePrimaryBreed}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    variant="outlined"
                                >
                                    {this.PrimaryBreed.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.value}
                                        </option>
                                    ))}
                                </TextField>
                            </Col>
                        </Row>
                        <Row className="content-left padding-zero-bot" style={{ textAlign: 'left' }}>
                            <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                <h6>Birth Month</h6>
                            </Col>
                            <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                <h6>Birth Year</h6>
                            </Col>
                        </Row>
                        <Row className="content-left" style={{ textAlign: 'left' }}>
                            <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                <TextField style={{ width: '90%' }}
                                    id="outlined-select-breed-native"
                                    select
                                    value={Month}
                                    onChange={this.handleBirth}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    variant="outlined"
                                >
                                    {this.BirthDate.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.value}
                                        </option>
                                    ))}
                                </TextField>
                            </Col>
                            <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                <TextField style={{ width: '90%' }}
                                    id="outlined-select-breed-native"
                                    select

                                    value={Year}
                                    onChange={this.handleYear}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    variant="outlined"
                                >
                                    {this.BirthDate.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.Year}
                                        </option>
                                    ))}
                                </TextField>
                            </Col>
                        </Row>
                        <Row className="content-left padding-zero-bot" style={{ textAlign: 'left' }}>
                            <h6>Where did your pet come from?</h6>
                        </Row>
                        <Row className="content-left padding-zero-bot" style={{ textAlign: 'left' }}>
                            <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                                <TextField style={{ width: '90%' }}
                                    id="outlined-select-breed-native"
                                    select
                                    value={Origin}
                                    onChange={this.handleOrigin}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    variant="outlined"
                                >
                                    {this.PetOrigin.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.value}
                                        </option>
                                    ))}
                                </TextField>
                            </Col>
                        </Row>
                    </div>
                </Row>
            </React.Fragment>

        )
    }
}

export default YourPets
