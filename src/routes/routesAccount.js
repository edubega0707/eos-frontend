import React from 'react'
import {Redirect, Switch, useRouteMatch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import ProfilePage from '../pages/Profile/ProfilePage';
import HistoryPage from '../pages/History/HistoryPage';
import MyAccountsPage from '../pages/MyAccounts/MyAccountsPage';
import DetailAccount from '../pages/DetailAccount/DetailAccount';

export const RoutesAccount=()=>{

    let { path} = useRouteMatch();
    return(
            <Switch>   
                <PrivateRoute exact path={path} component={MyAccountsPage} />
                <PrivateRoute path={`${path}/debit/:id_account`}  component={DetailAccount} />
                <PrivateRoute path={`${path}/profile`} component={ProfilePage}/>
                <PrivateRoute path={`${path}/history`}  component={HistoryPage}/> 
                <Redirect from="*" to={path} />
            </Switch>
     
           
    )
}