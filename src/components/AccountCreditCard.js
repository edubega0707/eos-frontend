import React from 'react';
//import {useDispatch, useSelector} from 'react-redux'
import {Card} from 'antd'

const AccountCreditCard= (props) => {
    const{account}=props

    return (
        <Card>
            credito
            Cuenta {account.number_account}
        </Card>
    );
};

export default AccountCreditCard;