import React from 'react';
import logovisa from '../assets/logoVisa.png'
import {Statistic} from 'antd'
const styles={
    containerCard:{
        width:"100%",
        height:"150px",
        padding: "2em",
        backgroundColor: '#364f6b',
        borderRadius: "20px",
        color:"#f9f7f7"
    },
    logoVisa:{
        width:"40%"
    },
    valueStyle:{
        color:"#f9f7f7"
    }
}
const AccountDebitCard = (props) => {
    const{account}=props

    return (
        <div style={styles.containerCard}>
            <img src={logovisa} alt="logovisa" style={styles.logoVisa}/>
            <span>{account.number_account}</span>
            <Statistic  value={account.ammount?account.ammount:1000}  prefix="$" valueStyle={styles.valueStyle} precision={2}/>
        </div>
    );
};

export default AccountDebitCard;