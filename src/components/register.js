import React, { Component } from "react";
//import "./Register.css";
import {Redirect} from 'react-router-dom';
import './login.css';
import {Form, Button} from 'react-bootstrap';
import LoginSuccess from './loginSuccess';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state={
        username : null,
        password : null,
        name: null,
        email: null,
        nameError : null,
        pwdError : null,
        unameError: null,
        emailError: null,
        flag: false };
    };

    validateUser = () => {
        // Code for comparing the input with the user credentials stored in the database
        // An API request will be made to the backend, which will fetch data from database and send it to the frontend
        if (this.state.username!==null && this.state.password!== null && this.state.name!== null && this.state.email!== null){
            console.log("Form Submiited for ", this.state.username);
            this.setState({flag:true});
            return <LoginSuccess/>;
        }
        else{
            alert("Entered Values are invalid");
        }
    };

    onNameChange= (e) => {
        const val= e.target.value;
        if (val!==null && val!=="" && val!==" " && val.length>1){
            this.state.nameError = null;
            this.setState({
            name: e.target.value,
            });
        }
        else{
            this.setState({
                nameError: "Please enter valid name",
            });
        }
      }

      onUnameChange= (e) => {
        const val= e.target.value;
        if (val!==null && val!=="" && val!==" " && val.length>5){
            this.state.unameError = null;
            this.setState({
            username: e.target.value,
            });
        }
        else{
            this.setState({
                unameError: "Username must be more than 5 characters",
            });
        }
      }

      onEmailChange= (e) => {
        const regexpr = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ );
        const val= e.target.value;
        if (val!==null && val!=="" && val!==" " && val.length>8){
            this.state.emailError = null;
            if(regexpr.test(val)==true){
                this.setState({
                email: e.target.value,
                });
            }
        }
        else{
            this.setState({
                emailError: "Please enter valid email address",
            });
        }
      }


      onPasswordChange= (e) => {
        const val= e.target.value;
        const regexpr= RegExp(/^[a-zA-z0-9.!#$%&’*+/=?^_`{|}~-]*$/);
        if (val!==null && val!=="" && val!==" " && val.length>8){
            this.state.pwdError = null;
            if(regexpr.test(val)===true){
                this.setState({
                password: e.target.value,
                });
            }
        }
        else{
            this.setState({
                pwdError: "Password length should be more than 8 characters and contain at least one small case letter, one upper case letter and a character ",
            });
        }
      }

    render() { 
        let redirectVar = null;
        if(this.state.flag){
            return <Redirect to = '/login-successful' />
        }
        return ( 
            <div className="background">
                <form className="forms">
                    <label >Name:</label>
                    <Form.Control input type="text" className="form-control"
                    onChange = {this.onNameChange} width="200"/>
                    <div className="warning"> {this.state.nameError} </div>
                    <label >Username:</label>
                    <Form.Control input type="text" className="form-control"
                    onChange = {this.onUnameChange} width="200"/> 
                    <div className="warning"> {this.state.unameError} </div>
                    <label >Email</label>
                    <Form.Control input type="text" className="form-control"
                    onChange = {this.onEmailChange} width="200"/>
                    <div className="warning"> {this.state.emailError} </div>
                    <label >Password:</label>     
                    <Form.Control input type="password" className="form-control" 
                    onChange = {this.onPasswordChange}/> 
                    <div className="warning"> {this.state.pwdError} </div>
                    <Button variant="primary" style={{margin:10}} onClick={() => {this.validateUser()}}> Create Account </Button>
                </form>
                </div>
           
         );
    }
}
 