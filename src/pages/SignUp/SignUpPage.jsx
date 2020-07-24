import React from 'react';
import NavBar from '../../containers/Navbar';
import {Row, Col} from 'antd'
import fondo from '../../assets/fondo_register.jpg'
import FormRegister from './FormRegister';
const SignUpPage = () => {

    const styles={
        containerLogin:{
            height:"calc(90vh)",
            //objectFit:"contain"
        },
        containerImage:{
            backgroundImage: `url(${fondo})`,
        },
        containerLoginForm:{
            display:"flex",
            justifyContent: 'center',
            alignItems: 'center',
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
                  <FormRegister/>
                </Col>
            </Row>
        </>
    );
};

export default SignUpPage