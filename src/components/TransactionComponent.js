import React from 'react';
import {Row, Col} from 'antd'


const styles={
    containerTransaction:{
        width:"100%",
    }
}
const TransactionComponent = (props) => {
     const {transaction}=props

    return (      
        <Row  style={styles.containerTransaction}>
            <Col lg={8} md={8} sm={24} xs={24}>
                <p>id transaction {transaction.id}</p>
                <p>Cuenta{transaction.account.number_account}</p>
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
                <p>Deposito{transaction.ammount}</p>
                <p>Saldo actual{transaction.total_account}</p>
            </Col>
            <Col lg={8} md={8} sm={24} xs={24}>
                <p>Referencia{transaction.reference}</p>
             
            </Col>
        </Row>    
    );
};

export default TransactionComponent;