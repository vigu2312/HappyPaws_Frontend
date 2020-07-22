import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


import './UserProfile.css'

class AccountSettings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            password: '',
            newPassword: '',
            confirmPassword: '',
            showPassword: false,
            showNewPassword: false,
            showConfirmPassword: false

        }
    }
    handlePassChange = (prop) =>(event) => {
        this.setState({
            [prop]: event.target.value
        })
        // setProvince(event.target.value);
    };
    handleClickShowOldPassword = () => {
        this.setState({
            showPassword: !this.state.showPassword
        })

    };
    handleClickShowNewPassword = () => {
        this.setState({
            showNewPassword: !this.state.showNewPassword
        })

    };
    handleClickShowConfirmPassword = () => {
        this.setState({
            showConfirmPassword: !this.state.showConfirmPassword
        })

    };

    render() {
        return (
            <div>
                <Row className="content-left">
                    <h5>Email</h5>
                </Row >
                <Row className="content-left" style={{ textAlign: 'left' }}>
                    <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                        <TextField style={{ width: '90%' }}
                            disabled
                            id="outlined-disabled"
                            defaultValue="john.doe@gmail.com"
                            variant="outlined"
                        />
                    </Col>
                </Row>
                <Row className="content-left">
                    <h5>Change Password</h5>
                </Row >
                <Row className="content-left" style={{ textAlign: 'left' }}>
                    <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                        <FormControl variant="outlined" style={{ width: '90%' }}>
                            <InputLabel htmlFor="outlined-adornment-password">Old-Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handlePassChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowOldPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />

                        </FormControl>
                    </Col>
                </Row>
                <Row className="content-left" style={{ textAlign: 'left' }}>
                    <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                        <FormControl variant="outlined" style={{ width: '90%' }}>
                            <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={this.state.showNewPassword ? 'text' : 'password'}
                                value={this.state.newPassword}
                                onChange={this.handlePassChange('newPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowNewPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {this.state.showNewPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />

                        </FormControl>
                    </Col>
                </Row>
                <Row className="content-left" style={{ textAlign: 'left' }}>
                    <Col md={6} lg={6} sm={12} xs={12} className="no-left-padding">
                        <FormControl variant="outlined" style={{ width: '90%' }}>
                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={this.state.showConfirmPassword ? 'text' : 'password'}
                                value={this.state.confirmPassword}
                                onChange={this.handlePassChange('confirmPassword')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowConfirmPassword}
                                            // onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {this.state.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                            />

                        </FormControl>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default AccountSettings
