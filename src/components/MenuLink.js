import React from 'react';
import {NavLink} from 'react-router-dom'


const styles={
    linkStyle:{
        fontSize:"14px",
        letterSpacing:"1px",
        color:"#f9f7f7",
    },
    activeStyle:{
        color:"#f9f7f7",
        fontWeight:"bold",
        fontSize:"14px",
    }
}

const MenuLink = (props) => {
    const {to, title}=props
    return (
        <NavLink 
            to={to} 
            style={styles.linkStyle}
            activeStyle={styles.activeStyle}
            >{title}
        </NavLink>
    );
};

export default MenuLink;