import React, { Component } from 'react';
import '../../App.css';
import axios from 'axios';
import swal from 'sweetalert';
import { Link, Redirect } from 'react-router-dom';
import Registration from '../registration/registration';
import { Card, CardContent, GridList, GridListTile } from '@material-ui/core';


class Plot extends Component {
    constructor() {
        super();
        this.state = {
            plotNumbers: {
                lane1: [],
                lane2: [],
                lane3: [],
                lane4: [],
                lane5: [],
                lane6: [],
                lane7: [],
                lane8: [],
            },
            registerFlag: 'No',
            selectedePlotId: '',
            laneId: '',
            editRegistrationFlag: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8000/fetchPlotData')
            .then(res => {
                console.log('fetchPlotData', res);
                this.setState({ plotNumbers: res.data });
            }).catch(err => console.error(err));
    }

    handleClick = (e, element) => {
        console.log('e', e)
        if (element.bookedStatus === 'Yes') {
            swal('Plot Details:-',
                `Plot Number-${element.plotId}
                 User Name- ${element.registrationData.userName}
                 Contact Details -${element.registrationData.contactNumber}`,
                {
                    buttons: {
                        editRegistration: {
                            text: 'Edit Registration Details',
                            value: 'editRegistration'
                        },
                        Ok: true
                    }

                }).then(value => {
                    if (value === 'editRegistration') {
                        this.setState({
                            editRegistrationFlag: true,
                            selectedePlotId: element.plotId
                        });
                        console.log('editRegistration', value)
                    }
                })
        } else {
            this.setState({
                registerFlag: 'Yes',
                selectedePlotId: element.plotId,
                // laneId: laneId
            });
        }
    }

    render() {
        if (this.state.registerFlag === "Yes") {
            return <Redirect to={{
                pathname: '/registration',
                state: {
                    selectedePlotId: this.state.selectedePlotId,
                    // laneId: this.state.laneId
                }
            }} />
        }

        if (this.state.editRegistrationFlag === true) {
            return <Redirect to={{
                pathname: '/editRegistration',
                state: { selectedePlotId: this.state.selectedePlotId }
            }}
            />
        }

        return (
            <div className="App">
                <header className="App-header">
                    <p> Plot Booking System  </p>
                </header>

                <Card className="background">
                    {/* <body > */}
                    <CardContent className='plotCardContent'>
                        <GridList cellHeight={50} cols={this.state.plotNumbers.lane1.length}>
                            {this.state.plotNumbers.lane1.map((element) => (
                                <GridListTile className={element.bookedStatus === 'Yes'
                                    ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </GridListTile>
                            ))}
                        </GridList>
                        <GridList cellHeight={30} cols={1}>
                                <GridListTile className="roads"><b>Road-1</b></GridListTile>
                        </GridList>
                        <GridList cellHeight={50} cols={this.state.plotNumbers.lane2.length}>
                            {this.state.plotNumbers.lane2.map((element) => (
                                <GridListTile className={element.bookedStatus === 'Yes'
                                    ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </GridListTile>
                            ))}
                        </GridList>
                        <GridList cellHeight={50} cols={this.state.plotNumbers.lane3.length}>
                            {this.state.plotNumbers.lane3.map((element) => (
                                <GridListTile className={element.bookedStatus === 'Yes'
                                    ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </GridListTile>
                            ))}
                        </GridList>
                        <GridList cellHeight={30} cols={1}>
                                <GridListTile className="roads"><b>Road-2</b></GridListTile>
                        </GridList>
                        <GridList cellHeight={50} cols={this.state.plotNumbers.lane4.length}>
                            {this.state.plotNumbers.lane4.map((element) => (
                                <GridListTile className={element.bookedStatus === 'Yes'
                                    ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </GridListTile>
                            ))}
                        </GridList>
                        <GridList cellHeight={50} cols={this.state.plotNumbers.lane5.length}>
                            {this.state.plotNumbers.lane5.map((element) => (
                                <GridListTile className={element.bookedStatus === 'Yes'
                                    ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </GridListTile>
                            ))}
                        </GridList>
                        <GridList cellHeight={30} cols={1}>
                                <GridListTile className="roads"><b>Road-3</b></GridListTile>
                        </GridList>
                        <GridList cellHeight={50} cols={this.state.plotNumbers.lane6.length}>
                            {this.state.plotNumbers.lane6.map((element) => (
                                <GridListTile className={element.bookedStatus === 'Yes'
                                    ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </GridListTile>
                            ))}
                        </GridList>
                        <GridList cellHeight={50} cols={this.state.plotNumbers.lane7.length}>
                            {this.state.plotNumbers.lane7.map((element) => (
                                <GridListTile className={element.bookedStatus === 'Yes'
                                    ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </GridListTile>
                            ))}
                        </GridList>
                        <GridList cellHeight={30} cols={1}>
                                <GridListTile className="roads"><b>Road-4</b></GridListTile>
                        </GridList>
                        <GridList cellHeight={50} cols={this.state.plotNumbers.lane8.length}>
                            {this.state.plotNumbers.lane8.map((element) => (
                                <GridListTile className={element.bookedStatus === 'Yes'
                                    ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </GridListTile>
                            ))}
                        </GridList>
                        {/* <ui>
                            {this.state.plotNumbers.lane1.map(element => {
                                return <li
                                    className={element.bookedStatus === 'Yes'
                                        ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </li>
                            })}
                        </ui>

                        <div className="roads"></div>

                        <ui>
                            {this.state.plotNumbers.lane2.map(element => {
                                return <li
                                    className={element.bookedStatus === 'Yes'
                                        ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </li>
                            })}
                        </ui>

                        <ui>
                            {this.state.plotNumbers.lane3.map(element => {
                                return <li
                                    className={element.bookedStatus === 'Yes'
                                        ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </li>
                            })}
                        </ui>

                        <div className="roads"></div>

                        <ui>
                            {this.state.plotNumbers.lane4.map(element => {
                                return <li
                                    className={element.bookedStatus === 'Yes'
                                        ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </li>
                            })}
                        </ui>

                        <ui>
                            {this.state.plotNumbers.lane5.map(element => {
                                return <li
                                    className={element.bookedStatus === 'Yes'
                                        ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </li>
                            })}
                        </ui>

                        <div className="roads"></div>

                        <ui>
                            {this.state.plotNumbers.lane6.map(element => {
                                return <li
                                    className={element.bookedStatus === 'Yes'
                                        ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </li>
                            })}
                        </ui>

                        <ui>
                            {this.state.plotNumbers.lane7.map(element => {
                                return <li
                                    className={element.bookedStatus === 'Yes'
                                        ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </li>
                            })}
                        </ui>

                        <div className="roads"></div>

                        <ui>
                            {this.state.plotNumbers.lane8.map(element => {
                                return <li
                                    className={element.bookedStatus === 'Yes'
                                        ? "booked_plots" : "unbooked_plots"}
                                    value={element} onClick={e => this.handleClick(e, element)}>
                                    <b>Plot-{element.plotId}</b>
                                </li>
                            })}
                        </ui> */}
                    </CardContent>
                    {/* </body> */}
                </Card>


            </div>
        );
    }
}

export default Plot;