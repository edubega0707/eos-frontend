import React from 'react';
//import {useDispatch, useSelector} from 'react-redux'
import {Card} from 'antd'

const AccountCard = (props) => {
    const{account}=props

    return (
        <Card>
            Cuenta {account.number_account}
        </Card>
    );
};

export default AccountCard;