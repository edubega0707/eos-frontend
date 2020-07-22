import React from 'react';
import {Row, Col}from 'antd'
import LogoItem from '../components/LogoItem';
import AvatarUser from '../components/AvatarUser';
import {useDispatch} from 'react-redux'
import { userActions } from '../redux/actions/actionsAuth';
const styles={
    containerHeader:{
        backgroundColor: "#112d4e",   
    }
}

const HeaderAccount = (props) => {
    const dispath=useDispatch()
    const logout=()=>{
        dispath(userActions.logout())
    }
    return (
        <Row type="flex" justify="space-around" align="middle" style={styles.containerHeader}>
            <Col lg={12} md={12} sm={12} xs={24}>
                <LogoItem />
            </Col>
            <Col lg={12} md={12} sm={12} xs={24}>
                <AvatarUser onClick={logout}/>
            </Col>  
        </Row>
    );
};

export default HeaderAccount;