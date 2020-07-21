import React from 'react';
import NavBar from '../../containers/Navbar';
import {Row, Col} from 'antd'
import FormLogin from './FormLogin';
import fondo from '../../assets/fondologin.jpg'
const LoginPage = () => {

    const styles={
        containerLogin:{
            height:"calc(90vh)",
            //objectFit:"contain"
        },
        containerImage:{
            backgroundImage: `url(${fondo})`,
        },
        containerLoginForm:{
            backgroundColor: '#3f72af',
        }
    }
    return (
        <>
            <NavBar/>
            <Row style={styles.containerLogin}>
                <Col lg={12} md={12} sm={24} xs={24} style={styles.containerImage}>
                   
                </Col>
                <Col lg={12} md={12} sm={24} xs={24} style={styles.containerLoginForm}>
                    <FormLogin/>
                </Col>
            </Row>
        </>
    );
};

export default LoginPage