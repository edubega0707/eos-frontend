import React from 'react'
import {Router, Route, Redirect, Switch } from 'react-router-dom';
//import { PrivateRoute } from './PrivateRoute';
//import Dashboard from './Components/Autenticados/Dashboard/Dashboard';
import { history } from './history';
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import SignUpPage from '../pages/SignUp/SignUpPage';
export const Routes=()=>{
    return(
        <Router history={history}>
            <Switch>
                {/* <PrivateRoute path="/dashboard" component={Dashboard} /> */}
                <Route exact path="/" component={HomePage} />   
                <Route exact path="/login" component={LoginPage} />  
                <Route exact path="/signup" component={SignUpPage} />  
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
           
    )
}