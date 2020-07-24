import React from 'react';
import { Card } from 'antd'
import AccountDebitCard from '../components/AccountDebitCard';
import {useRouteMatch,useLocation, Link } from 'react-router-dom';


const DebitCardActions = (props) => {
    const { account } = props
    let {path} = useRouteMatch();
    return (
        <Card
            actions={[
                // <Link to={`${path}/${account.id}`} >Movimientos</Link>,
                <Link to={{
                    pathname:`${path}/debit/${account.id}`,
                    state: { account: account }
                  }} >Movimientos</Link>,
            ]}
        >
            <AccountDebitCard account={account} />

        </Card>

    );
};

export default DebitCardActions;