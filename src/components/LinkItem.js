import React from 'react';
import {NavLink} from 'react-router-dom'


const styles={
    linkStyle:{
        fontSize:"18px",
        letterSpacing:"2px",
        color:"#dbe2ef",
        borderBottom: "2px solid #dbe2ef",
        margin:"0 10px 0 10px"
    },
    activeStyle:{
        color:"#3f72af",
        fontWeight:"bold",
        fontSize:"20px",
        borderBottom: "3px solid #3f72af",
    }
}

const LinkItem = (props) => {
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

export default LinkItem;