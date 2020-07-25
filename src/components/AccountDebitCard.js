import React from 'react';
import logovisa from '../assets/logovisa.svg'
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
        width:"30%"
    },
    valueStyle:{
        color:"#f9f7f7"
    },
    numberAcount:{
        fontSize:"18px",
        fontWeight:"300",
        letterSpacing:"2px"
    },
    containerLogo:{
        display:"flex",
        justifyContent:"flex-end",
        width:"100%",
    }
}
const AccountDebitCard = (props) => {
    const{account}=props
    console.log(account)
    return (
        <div style={styles.containerCard}>
            <div>
                <span style={styles.numberAcount}>{account.number_account ? account.number_account : null}</span>
            </div>
            <div>
                <Statistic
                    value={account.ammount ||account.ammount===0 ? account.ammount : 1000}
                    prefix="$"
                    valueStyle={styles.valueStyle}
                    precision={2}
                />
            </div>
            <div style={styles.containerLogo}>
                <img src={logovisa} alt="logovisa" style={styles.logoVisa} />
            </div>
        </div>
    );
};

export default AccountDebitCard;