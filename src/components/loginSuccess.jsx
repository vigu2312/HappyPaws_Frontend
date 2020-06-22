import React, { Component } from 'react';
import Home from './home';

class LoginSuccess extends Component {
    render() { 
        return  (
            <React.Fragment>
                <h3> Successfully Logged In</h3>
                <Home />
            </React.Fragment>
        );
        
            
    }
}
 
export default LoginSuccess;