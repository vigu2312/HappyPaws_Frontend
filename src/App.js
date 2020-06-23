import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';
import Search from './components/Search/search';
// import NavBar from './components/navBar';
import ContactUs from './components/ContactUs/contactus';
import DonateUs from './components/DonateUs/DonateUs';
import Shareyourstory from './components/Shareyourstory/Shareyourstory';
import HomePage from './components/HomePage/HomePage';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Enquire from './components/Enquire/Enquire';
// import Navbar from './components/Navbar/Navbar';
import PetCare from './components/PetCare/PetCare';
import Sponsor from './components/SponsorPet/Sponsor';


function App() {
  return (

    
    <React.Fragment>
    
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/donation" exact component={DonateUs} />
        <Route path="/share" exact component={Shareyourstory} />
        <Route path="/profile" exact component={Profile}/>
        <Route path="/enquire" exact component={Enquire}/>
        <Route path="/petCare" exact component={PetCare}/>
        <Route path="/sponsor" exact component={Sponsor}/>
        <Route path='/register' component={Register}/> 
        {/* <Route path='/login' component={Login}/>   */}
        {/* <Route path='/login-successful' component={LoginSuccess}/>     */}
        <Route path='/search' component={Search}/>
        <Route path='/contactus' component={ContactUs}/>
     
      </Switch>
      </React.Fragment>


  );
}

export default App;
