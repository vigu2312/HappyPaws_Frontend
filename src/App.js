import React from 'react';
import DonateUs from './components/DonateUs/DonateUs';
import Shareyourstory from './components/Shareyourstory/Shareyourstory';
import HomePage from './components/HomePage/HomePage';
import { Route, Link, Switch } from 'react-router-dom';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';

function App() {
  return (

    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/donation" exact component={DonateUs} />
        <Route path="/share" exact component={Shareyourstory} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile}/>
      </Switch>
    </div>

  );
}

export default App;
