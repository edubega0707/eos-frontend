import React from 'react';
import {Form, Input} from 'antd'
const styles={
    styleLabel:{
        color:"#112d4e",
        fontWeight:"600",
        fontSize:"18px",
        letterSpacing:"2px"
    },

    styleError:{
        color:"#fa7d09",
        fontWeight:"bold",
        fontSize:"14px",
        letterSpacing:"1px"
    },
    inputAmmount:{
        fontSize:"30px"
    }
}

export const FieldText = (props) => {
    return ( 
        <Form.Item
            labelCol={{ span:24 }}
            wrapperCol={{ span:24 }}
            label={<span style={styles.styleLabel}>{props.placeholder}</span>}
            validateStatus={props.meta.touched && props.meta.error ? "error" : ""}
            hasFeedback
            help={props.meta.touched && props.meta.error ? 
                <span style={styles.styleError}>{props.meta.error}</span>
                : ""} >
       
            <Input
                placeholder={props.placeholder}
                size={"default"}
                {...props.field}
              
            />
        </Form.Item>)
}

export const FieldPassword = (props) => {
    return ( 
        <Form.Item
            labelCol={{ span:24 }}
            wrapperCol={{ span:24 }}
            label={<span style={styles.styleLabel}>{props.placeholder}</span>}
            validateStatus={props.meta.touched && props.meta.error ? "error" : ""}
            hasFeedback
            help={props.meta.touched && props.meta.error ? 
                <span style={styles.styleError}>{props.meta.error}</span>
                : ""} >
    
            <Input.Password  
                placeholder={props.placeholder}
                size={"default"}
                {...props.field}/>
        </Form.Item>)
}


export const FieldDataAmmount = (props) => {
    return ( 
        <Form.Item
            labelCol={{ span:24 }}
            wrapperCol={{ span:24 }}
            label={<span style={styles.styleLabel}>{props.placeholder}</span>}
            validateStatus={props.meta.touched && props.meta.error ? "error" : ""}
            hasFeedback
            help={props.meta.touched && props.meta.error ? 
                <span style={styles.styleError}>{props.meta.error}</span>
                : ""} >
            <Input
                style={styles.inputAmmount}
                placeholder={props.placeholder}
                prefix={"$"}
                size={"default"}
                type="number"
                {...props.field}/>
        </Form.Item>)
}


