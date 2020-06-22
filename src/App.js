import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Nav, Navbar, Form, FormControl, Button, Carousel, Jumbotron, Col, Image, Row, Card } from 'react-bootstrap';
import Login from "./components/login";
import LoginSuccess from "./components/loginSuccess";
import NotFound from './components/page_not_found';
import Error from './components/error';
import { BrowserRouter, Route, Switch , Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import Register from './components/register';
import Search from './components/search';
import Home from './components/home';
import NavBar from './components/navBar';
import ContactUs from './components/contactus';

function App() {

  return (
    
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/register' component={Register}/> 
        <Route path='/login' component={Login}/>  
        <Route path='/login-successful' component={LoginSuccess}/>    
        <Route path='/search' component={Search}/>
        <Route path='/contactus' component={ContactUs}/>
        <Route path='/path-not-found' component={NotFound}/>
        <Route component={Error}/>     
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
