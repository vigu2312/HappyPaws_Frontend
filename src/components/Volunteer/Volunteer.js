
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import dogVol from './dogvolunteer.jpg';

import NavbarComponent from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


import { Form, Container, Button, Row, Col } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: "auto",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const primeState={
    fname:'',
    lname:'',
    email:'',
    location:'',
    hours:'',
    fnameError:'',
    lnameError:'',
    mailError:'',
    locError:'',
    hoursError:'',
    

}
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



   const handlefName=(event,fname)=>{
        // this.setState({
        //     fname: event.target.value
        // })
        setValue(event.target.fname);
    };

   const handleLName=(event)=>{
        // this.setState({
        //     lname: event.target.value
        // })
        setValue(event.target.lname);
    }
    
    const handleEmail=(event)=>{
        // this.setState({
        //     email: event.target.value
        // })
        setValue(event.target.email);
    }

    const handleLocation=(event)=>{
        // this.setState({
        //     location: event.target.value
        // })
        
        setValue(event.target.location);
    }
    const handleHours=(event)=>{
        // this.setState({
        //     hours: event.target.value
        // })
        setValue(event.target.hours);
        
    }
    const check=()=>{
        let fnameError="";
        let lnameError="";
        let mailError="";
        let hoursError="";
        let locError="";
        

        if(!primeState.email.includes('@')){
            mailError="INVALID EMAIL";
        }
        if(!primeState.fname){
            fnameError="BLANK FIELD"
        }
        if(!primeState.lname){
            lnameError="BLANK FIELD"
        }
        
        if(!primeState.email){
            mailError="BLANK FIELD"
        }
        if(!primeState.location){
            locError="BLANK FIELD"
        }
        if(!primeState.hours){
            hoursError="BLANK FIELD"
        }
       
       
        if (mailError || hoursError||locError||fnameError||lnameError) {
            // this.setState({ mailError, hoursError,locError,fnameError,lnameError });
            setValue({ mailError, hoursError,locError,fnameError,lnameError });
            return false;
          }
          
        if(mailError){
            // this.setState({mailError});
            setValue({ mailError});
            return false;
        }
        return true;
    };
    
    const formSubmit=(event)=>{
      event.preventDefault()
      const isRight=check();
      if(isRight)
      {
        // this.setState(primeState)
        setValue(primeState)
        alert(`Volunteering request sumitted. We will email you shortly with the confirmation.`)
          
      }
        
    }
    const state = {
      name: '',
      email: '',
      password: '',
      number: '',
      postal: '',
      nameError: null,
      emailError: null,
      numberError:null,
      postalError: null,
      disabled: true,

  }

  const isSubmitDisabled = () => {
      let nameIsRequired = false;
      let validEmail = false;
      let validNumber = false;
      let validPostal = false;

      if (state.name === '' || !state.name) {
          nameIsRequired = false;
          this.setState({
              nameError: null
          });
      } else {
          if (state.name !== '') {
              nameIsRequired = true
              this.setState({
                  nameError: null
              });
          }

      }

      if (state.email === "") {
          this.setState({
              emailError: null
          });
      } else {
          if (emailValidation(this.state.email)) {
              validEmail = true
              this.setState({
                  emailError: null
              });
          } else {
              this.setState({
                  emailError: "Please enter valid email"
              });
          }
      }

      if (state.number.length > 10 ) {
          validNumber = false
          this.setState({
              numberError: "Enter a valid contact number"
          });
      } else {
          validNumber = true
              this.setState({
                  numberError: null
              });

      }
      
      if ( postalValidation(state.postal) ) {
          validPostal = false;
          this.setState({
              postalError: "Enter valid postal code"
          });
      } else {
          if (state.postal.length>6) {
              validPostal = false
              this.setState({
                  postalError: "Enter valid postal code"
              });
          }
          else{
              validPostal = true
              this.setState({
                  postalError: null
              });
          }

      }
  }

  const emailValidation = (email) => {
      return new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(email);
     
  }

  const postalValidation = (postal) => {
      return new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/).test(postal);
     
  }

  const onValueChange = (e, label) => {
      const nextState = {};
      nextState[label] = e.target.value;;
      this.setState(nextState);
  }

  const onSubmit = () => {
      alert("Message sent");
      console.log(this.state);
      this.props.history.push('/profile');
  }

  return (
    <div className="MainVolunteer">
    <NavbarComponent/> 
        
    <br/>
    <h2>Volunteer with us</h2>
    <div className="volunteerImg">
        <img src={dogVol} alt="Volunteer"></img>
    </div>
    <br/>
    <div className={classes.root}>
    
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Volunteer with HappyPaws" {...a11yProps(0)} />
        <Tab label="Current Volunteering Events" {...a11yProps(1)} />
        <Tab label="Register to Volunteer" {...a11yProps(2)} />
   
      </Tabs>
      <TabPanel value={value} index={0}>
              <h5>
                    <br/>
                    Don't have the time to Volunteer ? <br/>
                    You can join us at various shelters to Volunteer with our dogs and cats.<br/>
                    A little care and a lot of fun!
                </h5>
                <h5><b>All you have to do is</b></h5>
                <h6>
                  1.Browse through our list of current events<br/>
                  2.Choose and event that you would like to volunteer for<br/>
                  3.Fill out our registration form <br/>
                  4. Wait for our response via email to confirm your volunteering slot<br/>
                  5.Come to the event, volunteer and have fun with the pets!<br/>
                </h6>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <center>
          <b><i>List of current Volunteering events for you to participate</i></b>
            <ul className="events">
                <li>Take a Dog for a Walk</li>
                <li>Kitty Corner</li>
                <li>Pet Washes</li>
                <li>Halifax Pet Community Parade</li>
                <li>Pet Food Expo</li>
            </ul>
        </center>
      </TabPanel>
      <TabPanel value={value} index={2}>
     
      <div className="FormVolunteer">
          
      <form className="form" onSubmit={formSubmit} >
                        <div>
                            <Container>
                                <Row className="row" >

                                    <TextField
                                        required
                                        
                                        label="First Name"
                                       
                                        variant="outlined"
                                    />

                                    <TextField
                                        label="Last Name"
                                        variant="outlined"
                                        />
                                </Row>

                                <Row className="row">
                                    <TextField
                                        required
                                       
                                        label="Email"
                                       
                                        variant="outlined"
                                    />
                                    <TextField
                                        label="Contact Number"
                                        type="number"
                              
                                        variant="outlined"
                                    />
                                </Row>
                                <Row>
                                    <select className="drop">
                                        <option>Select an Event</option>
                                        <option>Take a Dog for a Walk</option>
                                        <option>Kitty Corner</option>
                                        <option>Pet Washes</option>
                                        <option>Halifax Pet Community Parade</option>
                                        <option>Pet Food Expo</option>
                                        </select>
                                   
                                </Row>
                                
                                <Row>
                                <input type="submit" value="Volunteer"></input>
                                       
                                </Row>            
                                </Container>

                        </div>
                    </form>


{/* 
           <form onSubmit={formSubmit}>
               
               <fieldset name="vol">
               <legend><center><b><h2>Fill out the form to Volunteer</h2></b></center></legend>
               <p>First Name <input  value={primeState.fname} onChange={handlefName} type="text" name="fname"/> <br/></p>
               <div><b><i>{primeState.fnameError}</i></b></div>
               <p>Last Name <input  value={primeState.lname} onChange={handleLName} type="text" name="lname"/> <br/></p>
               <div><b><i>{primeState.lnameError}</i></b></div>
               <p>E-mail ID <input  value={primeState.email} onChange={handleEmail} type="text" name="email"/> <br/></p>
               <div><b><i>{primeState.mailError}</i></b></div>
               <p>Location <input  value={primeState.location} onChange={handleLocation} type="text" name="location"/> <br/></p>
               <div><b><i>{primeState.locError}</i></b></div>
               <p>No of Hours Available <input  value={primeState.hours} onChange={handleHours} type="text" name="hours"/> <br/></p>
               <div><b><i>{primeState.hoursError}</i></b></div>
              
               <p><input type="submit" name="subutton" value="VOLUNTEER"/> 
               
               </p> 
               </fieldset>
           </form> */}
           </div> 
      </TabPanel>
     
    </div>
    
    <Footer/>
    </div>
  );
}



// import React,{Component} from 'react';
// import './Volunteer.css';

// import NavbarComponent from '../Navbar/Navbar';
// import Footer from '../Footer/Footer';

// import dogVol from './dogvolunteer.jpg';

// import { Row, Col, Nav,Tab } from 'react-bootstrap';
// import Register from '../Register/Register';
// import Enquire from '../Enquire/Enquire';

// const primeState={
//     fname:'',
//     lname:'',
//     email:'',
//     location:'',
//     hours:'',
//     fnameError:'',
//     lnameError:'',
//     mailError:'',
//     locError:'',
//     hoursError:'',
    

// }

// class Volunteer extends Component{
//     constructor(props){
//         super(props)
//         this.state=primeState;
//     }
//     handlefName=(event)=>{
//         this.setState({
//             fname: event.target.value
//         })
//     }
//     handleLName=(event)=>{
//         this.setState({
//             lname: event.target.value
//         })
//     }
    
//     handleEmail=(event)=>{
//         this.setState({
//             email: event.target.value
//         })
//     }

//     handleLocation=(event)=>{
//         this.setState({
//             location: event.target.value
//         })
//     }
//     handleHours=(event)=>{
//         this.setState({
//             hours: event.target.value
//         })
//     }
//     check=()=>{
//         let fnameError="";
//         let lnameError="";
//         let mailError="";
//         let hoursError="";
//         let locError="";
        

//         if(!this.state.email.includes('@')){
//             mailError="INVALID EMAIL";
//         }
//         if(!this.state.fname){
//             fnameError="BLANK FIELD"
//         }
//         if(!this.state.lname){
//             lnameError="BLANK FIELD"
//         }
        
//         if(!this.state.email){
//             mailError="BLANK FIELD"
//         }
//         if(!this.state.location){
//             locError="BLANK FIELD"
//         }
//         if(!this.state.hours){
//             hoursError="BLANK FIELD"
//         }
       
       
//         if (mailError || hoursError||locError||fnameError||lnameError) {
//             this.setState({ mailError, hoursError,locError,fnameError,lnameError });
//             return false;
//           }
          
//         if(mailError){
//             this.setState({mailError});
//             return false;
//         }
//         return true;
//     };
    
//     formSubmit=(event)=>{
//       event.preventDefault()
//       const isRight=this.check();
//       if(isRight)
//       {
//         this.setState(primeState)
//         alert(`Volunteering request sumitted. We will email you shortly with the confirmation.`)
          
//       }
        
//     }
//     render(){
//         return(  
    
//     <div className="MainVolunteer">
//         <NavbarComponent/> 
        
//         <br/>
//         <h2>Volunteer with us</h2>
//         <div className="volunteerImg">
//             <img src={dogVol} alt="Volunteer"></img>
//         </div>
//         <div>
//             <br/>
// <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//   <Row>
//     <Col sm={3}>
//       <Nav className="flex-column">
//         <Nav.Item>
//           <Nav.Link eventKey="first">Volunteer Info</Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="second">Volunteer Events</Nav.Link>
//         </Nav.Item> 
//         <Nav.Item>
//           <Nav.Link eventKey="third">Volunteer Sign Up</Nav.Link>
//         </Nav.Item>
//       </Nav>
//     </Col>
//     <Col sm={9}>
//       <Tab.Content>
//         <Tab.Pane eventKey="first">
//             <h5>
//                     <br/>
//                     Don't have the time to Volunteer ? <br/>
//                     You can join us at various shelters to Volunteer with our dogs and cats.<br/>
//                     A little care and a lot of fun!
//                 </h5>
//         </Tab.Pane>
//         <Tab.Pane eventKey="second">
//         <h1>
//                 <br/>
//                 Don't have the time to Volunteer ? <br/>
//                 You can join us at various shelters to Volunteer with our dogs and cats.<br/>
//                 A little care and a lot of fun!
//             </h1>
//         </Tab.Pane>
//         <Tab.Pane eventKey="third">
//         <h2>
//                 <br/>
//                 Don't have the time to Volunteer ? <br/>
//                 You can join us at various shelters to Volunteer with our dogs and cats.<br/>
//                 A little care and a lot of fun!
//             </h2>
//         </Tab.Pane>
//       </Tab.Content>
//     </Col>
//   </Row>
// </Tab.Container>
//         </div>
    

//         <div className="FormVolunteer">
//             <h5>
//                 <br/>
//                 Don't have the time to Volunteer ? <br/>
//                 You can join us at various shelters to Volunteer with our dogs and cats.<br/>
//                 A little care and a lot of fun!
//             </h5>
//            <form onSubmit={this.formSubmit}>
               
//                <fieldset name="vol">
//                <legend><center><b><h2>Fill out the form to Volunteer</h2></b></center></legend>
//                <p>First Name <input  value={this.state.fname} onChange={this.handlefName} type="text" name="fname"/> <br/></p>
//                <div><b><i>{this.state.fnameError}</i></b></div>
//                <p>Last Name <input  value={this.state.lname} onChange={this.handleLName} type="text" name="lname"/> <br/></p>
//                <div><b><i>{this.state.lnameError}</i></b></div>
//                <p>E-mail ID <input  value={this.state.email} onChange={this.handleEmail} type="text" name="email"/> <br/></p>
//                <div><b><i>{this.state.mailError}</i></b></div>
//                <p>Location <input  value={this.state.location} onChange={this.handleLocation} type="text" name="location"/> <br/></p>
//                <div><b><i>{this.state.locError}</i></b></div>
//                <p>No of Hours Available <input  value={this.state.hours} onChange={this.handleHours} type="text" name="hours"/> <br/></p>
//                <div><b><i>{this.state.hoursError}</i></b></div>
              
//                <p><input type="submit" name="subutton" value="VOLUNTEER"/> 
               
//                </p> 
//                </fieldset>
//            </form>
//            </div> 
           
      
        
//         <Footer />

//     </div>
        
    
//     );
//     }

// }
// export default Volunteer;