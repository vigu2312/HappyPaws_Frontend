import React, { Component } from 'react';
import LoginSuccess from './loginSuccess';
import {Redirect} from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import "./login.css";

class Login extends Component {
    
    constructor(props){
        super(props);
        this.state={
        username : null,
        password : null,
        nameError : null,
        pwdError : null,
        flag: false };
    };

    validateUser = () => {
        // Code for comparing the input with the user credentials stored in the database
        // An API request will be made to the backend, which will fetch data from database and send it to the frontend
        if (this.state.username!==null && this.state.password!== null){
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
            username: e.target.value,
            });
        }
        else{
            this.setState({
                nameError: "Enter Valid Value",
            });
        }
      }

      onPasswordChange= (e) => {
        const val= e.target.value;
        const regexpr= RegExp(/^[a-zA-z0-9.!#$%&’*+/=?^_`{|}~-]*$/);
        if (val!==null && val!=="" && val!==" " && val.length>8){
            this.state.pwdError = null;
            if(regexpr.test(val)==true){
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
                    <label >Username:</label>
                    <Form.Control input type="text" className="form-control"
                    name="uname" onChange = {this.onNameChange} width="200"/>
                     <div className="warning"> {this.state.nameError} </div> 
                    <label >Password:</label>     
                    <Form.Control input type="password" className="form-control" 
                    name="pwd" onChange = {this.onPasswordChange}/>
                     <div className="warning"> {this.state.pwdError} </div> 
                    <Button variant="primary" style={{margin:10}} onClick={() => {this.validateUser()}}> Submit </Button>
                </form>
                </div>
           
         );
    }
}
 
export default Login;