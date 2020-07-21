import React from 'react';

const styles={
    container:{
        display:"flex",
        justifyContent: 'center',
        alignItems: 'center',     
    },

    logo:{
        width:"30%",
        marginRight: "10px",
    },
    title:{
        fontSize: "20px",
        fontWeight: 'bold',
        letterSpacing:"2px",
        color:"#dbe2ef"
    }
}
const LogoItem = (props) => {
    return (  
        <div style={styles.container}>
            <img style={styles.logo} src="https://image.flaticon.com/icons/svg/2152/2152534.svg" alt="logo"/>
            <span style={styles.title}>CashMachine</span>
        </div>
    );
};

export default LogoItem;