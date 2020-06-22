import React, { Component } from 'react';
import './login.css';
import {Form, Button} from 'react-bootstrap';

class ContactUs extends Component {
    constructor(props){
        super(props);
        this.state={
        body : null,
        subject : null,
        name: null,
        email: null,
        nameError : null,
        subjectError : null,
        bodyError: null,
        emailError: null,
        flag: false };
    };

    validateUser = () => {
        // Code for comparing the input with the user credentials stored in the database
        // An API request will be made to the backend, which will fetch data from database and send it to the frontend
        if (this.state.name!==null && this.state.email!== null && this.state.body!== null && this.state.subject!== null){
            console.log("Form submitted ");
            alert("Form submitted successfully. We will get back to you shortly!");
            
        }
        else{
            alert("Entered Values are invalid");
        }
    };

    onNameChange= (e) => {
        const val= e.target.value;
        if (val !== null && val!=="" && val!==" " && val.length>1){
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

      onBodyChange= (e) => {
        const val= e.target.value;
        if (val!==null && val!=="" && val!==" " && val.length>10){
            this.state.bodyError = null;
            this.setState({
            body: e.target.value,
            });
        }
        else{
            this.setState({
                bodyError: "Body part must be more than 10 characters",
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


      onSubjectChange= (e) => {
        const val= e.target.value;
        
        if (val!==null && val!=="" && val!==" " && val.length>8){
            this.state.subjectError = null;            
            this.setState({
            subject: e.target.value,
            });
            
        }
        else{
            this.setState({
                subjectError: "Subject length must be more than 8 characters",
            });
        }
      }

    render() { 
        
        return ( 
            <React.Fragment>
            <div className="contact-background">
            <div className="contact">
                <form >
                    <label >Name:</label>
                    <Form.Control input type="text" className="form-control"
                    onChange = {this.onNameChange}/>
                    <div className="warning"> {this.state.nameError} </div>
                    
                    <label >Email: </label>
                    <Form.Control input type="text" className="form-control"
                    onChange = {this.onEmailChange}/>
                    <div className="warning"> {this.state.emailError} </div>

                    <label >Subject:</label>
                    <Form.Control input type="text" className="form-control"
                    onChange = {this.onSubjectChange} /> 
                    <div className="warning"> {this.state.subjectError} </div>

                    <label >Concerns:</label>     
                    <textarea cols="6" rows="3" type="password" className="form-control" 
                    onChange = {this.onBodyChange}/> 
                    <div className="warning"> {this.state.bodyError} </div>
                    <Button variant="primary" style={{margin:10}} onClick={() => {this.validateUser()}}> Submit Query </Button>
                </form>
                </div>
                </div>
                </React.Fragment>
         )};
}
 
export default ContactUs;