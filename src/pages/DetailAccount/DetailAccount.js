import React from 'react';
import {Row, Col, List} from 'antd'
import {useParams } from 'react-router-dom';
import {useSelector,useDispatch}from 'react-redux' 
import AccountDebitCard from '../../components/AccountDebitCard';
import ModalFormAction from '../../containers/ModalFormAction';
import FormDeposito from './forms/FormDeposito';
import { TransactionActions } from '../../redux/actions/actionsTransactions';
import { AccountDebitActions } from '../../redux/actions/actionsAccounts';
import TransactionComponent from '../../components/TransactionComponent';
import FormRetiro from './forms/FormRetiro';


const styles={
    containerAccount:{
        marginTop:"2em"
    },
    containerActions:{
        display:"flex",
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop:"3em"
    },
    containerMovimientos:{
        marginTop:"3em"
    }
}
const DetailAccount = (props) => {
    let {id_account}=useParams()
    const detail= useSelector(state => state.accountDetailReducer.account)
    const dispatch=useDispatch()

    React.useEffect(()=>{
        dispatch(AccountDebitActions.getDetailAccountRequest(id_account))
    },[dispatch, id_account])

    return (
        <>
        <Row gutter={48} style={styles.containerAccount}>
            <Col xl={8} lg={8} md={8} sm={24} xs={24}>
                <AccountDebitCard  account={detail}/>
            </Col>
            <Col xl={16} lg={16} md={16} sm={24} xs={24} style={styles.containerActions}>
                    <ModalFormAction title="Depositar Efectivo" submitFunction={TransactionActions.depositoRequest}>
                        <FormDeposito account={detail} />
                    </ModalFormAction>
                    <ModalFormAction title="Retirar Efectivo" submitFunction={TransactionActions.retiroRequest}>
                        <FormRetiro account={detail} />
                    </ModalFormAction>
            </Col>
            </Row>
            <Row gutter={48}>
            <Col xl={24} lg={24} md={24} sm={24} xs={24} style={styles.containerMovimientos}>
                    <List
                        size="small"
                        pagination={{
                            pageSize: 10,
                        }}
                        header={<div>Movimientos</div>}
                        bordered
                        dataSource={detail.account_transaction}
                        renderItem={transaction =>
                            <List.Item>
                                <TransactionComponent transaction={transaction} />
                            </List.Item>}
                    />
                </Col>
                
            </Row>
        </>
    );
};

export default DetailAccount;