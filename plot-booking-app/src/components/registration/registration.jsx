import React, { Component } from 'react';
import axios from 'axios';
import '../../App.css';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom';
import {
    FormGroup, FormControl, InputLabel, FormHelperText, Input, Button, Card,
    CardContent
} from '@material-ui/core';

class Registration extends Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            address: '',
            city: '',
            state: '',
            country: '',
            contactNumber: '',
            redirectPlotFlag:false
        }
    }

    submitRegistrationForm = (e) => {
        e.preventDefault();
        const registrationData = {
            userName: this.state.userName,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            contactNumber: this.state.contactNumber
        };
        const selectedePlotId = this.props.location.state.selectedePlotId;
        const laneId = this.props.location.state.laneId;
        axios.post('http://localhost:8000/plotRegistration',
            { registrationData: registrationData, selectedePlotId: selectedePlotId,
                laneId:laneId })
            .then(res => {
                if (res) {
                    swal('Congratulations',
                        'You have registered the Plot successfully',
                        'success')
                        .then(e => {
                            this.setState({redirectPlotFlag:true});
                        });
                }

            })
            .catch(err => console.error(err));
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleCancel = () => {
        this.setState({ redirectPlotFlag: true });
    }

    render() {
        if(this.state.redirectPlotFlag === true){
            return <Redirect to='/plot' />
        }
        return (
            <div className="App">
                <header className="App-header">
                    <p> Plot Registration Form  </p>
                </header>
                <Card className='form_card'>
                    <CardContent className='form_card_content'>
                        <form className='registraion_form' noValidate autoComplete="off">
                            {/* <FormControl className='form_input'> */}
                                < div htmlFor="my-input" className ='plotDisabled'>
                                <b>Plot Number : {this.props.location.state.selectedePlotId}</b>
                                </div>
                               {/*  <Input id="my-input" aria-describedby="my-helper-text" fullWidth
                                    value= name="selectedePlotId" disabled 
                                    className ='plotDisabled'/> */}
                            {/* </FormControl> */}
                            <br></br>
                            <FormControl className='form_input'>
                                < InputLabel htmlFor="my-input">Person Name:</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" fullWidth
                                    value={this.state.userName} name="userName" onChange={this.handleChange} />
                            </FormControl>
                            <br></br>
                            <FormControl className='form_input'>
                                <InputLabel htmlFor="my-input">Address:</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text"
                                    value={this.state.address} name="address" onChange={this.handleChange} />
                            </FormControl>
                            <br></br>
                            <FormControl className='form_input'>
                                <InputLabel htmlFor="my-input">City:</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text"
                                    value={this.state.city} name="city" onChange={this.handleChange} />
                            </FormControl>
                            <br></br>
                            <FormControl className='form_input'>
                                <InputLabel htmlFor="my-input">State:</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text"
                                    value={this.state.state} name="state" onChange={this.handleChange} />
                            </FormControl>
                            <br></br>
                            <FormControl className='form_input'>
                                <InputLabel htmlFor="my-input">Country:</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text"
                                    value={this.state.country} name="country" onChange={this.handleChange} />
                            </FormControl>
                            <br></br>
                            <FormControl className='form_input'>
                                <InputLabel htmlFor="my-input">Contact Number:</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text"
                                    value={this.state.contactNumber} name="contactNumber" onChange={this.handleChange} />
                            </FormControl >
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <div>
                                <Button className='registrationButton' variant="contained"
                                    onClick={this.submitRegistrationForm}>
                                    Submit Details</Button>
                                &nbsp; &nbsp; &nbsp; &nbsp;
                                <Button className='registrationButton' variant="contained"
                                    onClick={this.handleCancel}>
                                    Cancel</Button>
                            </div>
                        </form >
                    </CardContent>
                </Card>
            </div>
        )
    }

}

export default Registration;