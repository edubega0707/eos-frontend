import React from 'react';
import {Row, Col}from 'antd'
import LogoItem from '../components/LogoItem';

const styles={
    containerHeader:{
        backgroundColor: "#112d4e",   
    }
}
const HeaderAccount = () => {
    return (
        <Row type="flex" justify="space-around" align="middle" style={styles.containerHeader}>
            <Col lg={12} md={12} sm={12} xs={24}>
                <LogoItem />
            </Col>
            <Col lg={12} md={12} sm={12} xs={24}>
                
            </Col>  
        </Row>
    );
};

export default HeaderAccount;