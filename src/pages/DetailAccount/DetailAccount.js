import React, {useState,useEffect} from 'react';
import {Row, Col} from 'antd'
import { useLocation } from 'react-router-dom';
import AccountDebitCard from '../../components/AccountDebitCard';
import ModalFormAction from '../../containers/ModalFormAction';
import FormDebitAccount from '../MyAccounts/Forms/FormDebitAccount';
import FormDeposito from './forms/FormDeposito';
import { TransactionActions } from '../../redux/actions/actionsTransactions';


const styles={
    containerAccount:{
        marginTop:"2em"
    }
}
const DetailAccount = (props) => {
    let {state}=useLocation()
    return (
        <>
        <Row gutter={48} style={styles.containerAccount}>
            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                <AccountDebitCard  account={state.account}/>
            </Col>
            <Col xl={16} lg={16} md={16} sm={24} xs={24}>
                    <ModalFormAction title="Depositar Efectivo" submitFunction={TransactionActions.depositoRequest}>
                        <FormDeposito account={state.account} />
                    </ModalFormAction>
                    <ModalFormAction title="Retirar Efectivo" submitFunction={TransactionActions.retiroRequest}>
                        <FormDebitAccount />
                    </ModalFormAction>
            </Col>
        </Row>
        <Row gutter={48}>

        </Row>
        </>
    );
};

export default DetailAccount;