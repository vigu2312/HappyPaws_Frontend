// Dummy content is referred from https://www.lipsum.com/
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Form, Button } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import './HomePage.css';
import NavbarComponent from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Login from '../Login-Register/Login'

class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addModalShow: false
        }
        this.showLoginModal = this.showLoginModal.bind(this);
    }

    showLoginModal = () => {
        this.setState({
            addModalShow : true
        })
        console.log("Pet Quiz button" + this.state.addModalShow)
    }

    LoginModalClose = () => {
        this.setState({
            addModalShow:false
        })
    }



    render() {
        const { isFetching } = this.state;
        const LoginModal = this.state.addModalShow

        return (
            <div className="home-component">
                <NavbarComponent />
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://storage.needpix.com/rsynced_images/dogs-4137678_1280.jpg"
                            alt="First slide"
                            width="100%"
                            height="450px"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://storage.needpix.com/rsynced_images/cat-4262034_1280.jpg"
                            alt="Third slide"
                            width="100%"
                            height="450px"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.hertsforlearning.co.uk/sites/default/files/images/blog/DOG%20PIC%201.jpg"
                            alt="Third slide"
                            width="100%"
                            height="450px"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div>

                </div>
                <h4 className="font-style-class">Pet Description</h4>
                <Container>
                    <Row>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            Saving a life is always the best gift you could offer. And when it comes to pets, there is not enough shelter for the number of animals that are born every year. This can be assisted by providing them a safe place for life. Adopting them and giving them a little space in our homes and lives would create a great impact in their lives. HappyPaws is intended in helping find a lovely and safe home for animals who don’t have a proper shelter.
                        </Col>
                        <Col xs={12} sm={12} md={6} lg={6}>
                            <div className="font-class">
                                <h4>"Bring a pet into your family today"</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div>
                </div>
                <div className="btn-center">
                    <button className="btn-css" onClick={() => this.props.history.push('/search')}>Find a pet</button>
                </div>
                <div className = "modal-show">
                            <Login 
                            show = {LoginModal} 
                            onHide = {this.LoginModalClose}>                                
                            </Login>
                        </div>
                {/* <Button variant="outline-primary" size="lg"> Take a Quiz </Button>{' '} */}
                <h4 className="font-style-class">Pets available for adoption near your location</h4>
                <Container >
                    <Row>
                        <Col xs={4.5} sm={6} md={6} lg={3}>
                            <div style={{ cursor: "pointer" }} onClick={() => alert("Under Construction")} className="img-pets">
                                <img height="250px" width="100%" src="https://www.insidermedia.com/uploads/news/images/puppy-1207816_960_720.jpg"></img>
                                <p>Polo, Darmouth</p>
                            </div>
                        </Col>
                        <Col xs={4.5} sm={6} md={6} lg={3}>
                            <div style={{ cursor: "pointer" }} onClick={() => alert("Under Construction")} className="img-pets">
                                <img height="250px" width="100%" src="https://live.staticflickr.com/730/21225816748_c41918293d_b.jpg"></img>
                                <p>Cashew, Clayton Park</p>
                            </div>
                        </Col>
                        <Col xs={4.5} sm={6} md={6} lg={3}>
                            <div style={{ cursor: "pointer" }} onClick={() => alert("Under Construction")} className="img-pets">
                                <img height="250px" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg"></img>
                                <p>Mixy, Spring Garden</p>
                            </div></Col>
                        <Col xs={4.5} sm={6} md={6} lg={3}>
                            <div style={{ cursor: "pointer" }} onClick={() => alert("Under Construction")} className="img-pets">
                                <img height="250px" width="100%" src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg"></img>
                                <p>Trixy, Lower Sackville</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <h4 className="font-style-class"> Read our stories of happy customers</h4>
                <Container>
                    <Row >
                        <Col xs={9} sm={9} md={6} lg={6}>
                            <div style={{ cursor: "pointer" }} onClick={() => alert("Under Construction")} className="img-view">
                                <img src="https://storage.needpix.com/rsynced_images/couple-532010_1280.jpg" height="250px" width="100%"></img>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. </p>
                            </div>
                        </Col>
                        <Col xs={9} sm={9} md={6} lg={6}>
                            <div style={{ cursor: "pointer" }} onClick={() => alert("Under Construction")} className="img-view">
                                <img src="https://p1.pxfuel.com/preview/633/272/975/dogs-dog-pet-pug.jpg" height="250px" width="100%"></img>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-style">
                    <h4 className="font-style-class">Get your new friend today</h4>
                    <Container>
                        <Row>
                            <Col xs={9} sm={6} md={4} lg={4}>
                                <div className="connect-style">
                                    Pet Adoption FAQS
                                   <img src="https://www.isqua.org/images/2018/02/16/faq-img.png" width="100%" height="100px"></img>
                           Have a question? Get answers to questions over here..
                           <div><Button variant="outline-primary" onClick={() => alert("Under Construction")} >FAQs</Button>{' '}</div>
                                </div>
                            </Col>
                            <Col xs={9} sm={6} md={4} lg={4}>
                                <div className="connect-style">
                                    Contact Us
                                    <img src="https://mortgagephonenumber.com/wp-content/uploads/2018/12/contact_insurance.jpg" width="100%" height="100px"></img>
                                Details for contacting us are mentioned in Contact Us.
                          <div><Button variant="outline-primary" onClick={() => alert("Under Construction")} >Contact Us</Button>{' '}</div>
                                </div>
                            </Col>
                            <Col xs={9} sm={6} md={4} lg={4}>
                                <div className="connect-style">
                                    About Us
                                    <img src="https://cdn.pixabay.com/photo/2016/03/11/08/02/usa-1249880_960_720.jpg" width="100%" height="100px"></img>
                               Visit your About Us page to know our details.
                            <div><Button variant="outline-primary" onClick={() => alert("Under Construction")} >About Us</Button>{' '}</div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>

        );

    }

}

export default HomePage;