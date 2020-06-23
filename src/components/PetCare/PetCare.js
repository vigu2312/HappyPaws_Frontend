import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import DogCare from '../../DogCare.jpg'
import CatCare from '../../CatCare.jpg'
import TextField from '@material-ui/core/TextField';
import DogAdoption from '../../DogAdoption.jpg'
import DogsCare2 from '../../DogsCare2.jpg'
import CatAdoption from '../../CatAdoption.jpg'
import HorseAdoption from '../../HorseAdoption.jpg'
import { Form, Button } from 'react-bootstrap'
import './PetCare.css'
import PetCareInfo from './PetCareInfo';
import NavbarComponent from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

class PetCare extends Component {
    render() {
        return (
            <React.Fragment>
            <NavbarComponent></NavbarComponent>
            <div className="pet-care-root">
                <div className="pet-care-outline">
                    <h1>Pet Care</h1>
                    <div className="pet-care-carousel">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={DogCare}
                                    style={{ height: '100%', width: '100%' }}
                                    alt="First slide"
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={CatCare}
                                    style={{ height: '100%', width: '100%' }}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={DogsCare2}
                                    style={{ height: '100%', width: '100%' }}
                                    alt="Third slide"
                                />
                                <Carousel.Caption>

                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="pet-care-carousel-info">
                        <p>
                            Cupidatat ex deserunt do proident est voluptate cupidatat sint consectetur reprehenderit. Laboris est do et id labore magna duis. Sit deserunt anim quis sint eu dolore tempor incididunt cupidatat adipisicing minim est. Ad nisi ea dolore ut.
                        </p>

                    </div>
                    <hr></hr>
                    <div className="pet-care-info">
                        <PetCareInfo title="Dogs"
                            image={DogAdoption}
                            description="
                            Learn how to take care of your dog. Learn the basics of dog housing, diet and behaviour. Sharing your life with a dog can be a rewarding experience, it also means increased responsibilites...">
                        </PetCareInfo>
                        <PetCareInfo title = "Cats" 
                        image={CatAdoption}
                        description = "Litter box odor can be the toughest part of living with a cat. Our six tips can help...">

                        </PetCareInfo>
                        <PetCareInfo title = "Horse"
                        image = {HorseAdoption}
                        description = "Sometimes horses needs special attention. Equine therapy can improve motor coordination, posture, balance, muscle tone, concentration, self-esteem and self-confidence in horses...">

                        </PetCareInfo>

                    </div>
                </div>
                <div className="pet-care-find-adoption">
                    <h3 style={{ fontWeight: '500' }}>Find Shelter Homes</h3>
                    <hr></hr>
                    <Form>
                        <Form.Group>
                            <Form.Row>
                                <TextField id="outlined-basic" label="Location" variant="outlined" placeholder="Halifax" fullWidth />
                            </Form.Row>
                        </Form.Group>
                        <Form.Group>
                            <Form.Row>
                                <TextField id="outlined-basic" label="Shelter Home" variant="outlined" placeholder="Bide Awhile" fullWidth />
                            </Form.Row>
                        </Form.Group>
                        <Form.Group>

                            <Form.Row>
                                <Button variant="primary"><i class="fas fa-search"></i> Search</Button>
                            </Form.Row>
                        </Form.Group>
                    </Form>
                </div>
            </div>
            <Footer />
            </React.Fragment>
        )
    }
}

export default PetCare
