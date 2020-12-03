import React, { Component } from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Plot from './components/plot/plot.jsx';
import Registration from './components/registration/registration.jsx';
import EditRegistartion from './components/registration/edit_Registartion.jsx';


const Routes = () => {
    return (
            <Switch>
                <Route exact path="/" >
                    <Redirect to='/plot'></Redirect>
                </Route>
                <Route path='/plot' component={Plot} />
                <Route path="/registration" component={Registration} />
                <Route path="/editRegistration" component ={EditRegistartion} />
            </Switch>
    )
}

export default Routes;