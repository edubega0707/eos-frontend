import React from 'react';
import {Row, Col} from 'antd'
import LogoItem from '../components/LogoItem';
import LinkItem from '../components/LinkItem';


const styles={
    contanerRow:{
        backgroundColor:'#112d4e',
        padding: "10px",
    },
    containerCol:{
        display:"flex",
        justifyContent: 'center',
    },
    containerMenu:{
        display:"flex",
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexWrap: 'wrap',
    }
}

const NavBar = (props) => {
    return (
        <Row type="flex" justify="space-around" style={styles.contanerRow}>
            <Col  lg={4} sm={24} xs={24} style={styles.containerCol}>
                <LogoItem/>
            </Col>
            <Col lg={15} sm={24} xs={24} style={styles.containerMenu}>
               <LinkItem to={"/"} title="Home"/>
            
            </Col>
            <Col lg={5} sm={24} xs={24} style={styles.containerMenu}>
               <LinkItem to={"/login"} title="Ingresar"/>
               <LinkItem to={"/signup"} title="Registrate"/>
            </Col>
        </Row>
    )
}

export default NavBar;