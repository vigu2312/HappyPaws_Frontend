import React from 'react';
import DonateUs from './components/DonateUs/DonateUs';
import Shareyourstory from './components/Shareyourstory/Shareyourstory';
import HomePage from './components/HomePage/HomePage';
import { Route, Link, Switch } from 'react-router-dom';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Enquire from './components/Enquire/Enquire';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (

    
    <div>
    
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/donation" exact component={DonateUs} />
        <Route path="/share" exact component={Shareyourstory} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile}/>
        <Route path="/enquire" exact component={Enquire}/>
      </Switch>
    </div>

  );
}

export default App;
