import React from 'react';
import DonateUs from './components/DonateUs/DonateUs';
import Shareyourstory from './components/Shareyourstory/Shareyourstory';
import HomePage from './components/HomePage/HomePage';
import { Route, Link, Switch } from 'react-router-dom';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Enquire from './components/Enquire/Enquire';
import Navbar from './components/Navbar/Navbar';
import PetCare from './components/PetCare/PetCare';
import Sponsor from './components/SponsorPet/Sponsor';

function App() {
  return (
<<<<<<< HEAD

    
    <React.Fragment>
=======
    <div>
>>>>>>> Initial_Repo
    
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/donation" exact component={DonateUs} />
        <Route path="/share" exact component={Shareyourstory} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile}/>
        <Route path="/enquire" exact component={Enquire}/>
        <Route path="/petCare" exact component={PetCare}/>
        <Route path="/sponsor" exact component={Sponsor}/>
      </Switch>
      </React.Fragment>

  );
}

export default App;
