import React from 'react';
//import {useDispatch, useSelector} from 'react-redux'
import {Card} from 'antd'

const AccountDebitCard = (props) => {
    const{account}=props

    return (
        <Card>
            debito
            Cuenta {account.number_account}
        </Card>
    );
};

export default AccountDebitCard;