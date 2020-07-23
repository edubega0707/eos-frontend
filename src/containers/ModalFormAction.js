import React,{useState} from 'react';
import { Modal, Button } from 'antd';
import {useDispatch} from 'react-redux'
import { AccountDebitActions } from '../redux/actions/actionsAccounts';


const ModalFormAction = (props) => {
    const dispatch=useDispatch()
    const {title, children}=props
    const[visible,setVisible]=useState(false)
    const[loading,setLoading]=useState(false)
    
    const handleSubmit = (values) => {
        setLoading(true)
        setTimeout(() => {
            dispatch(AccountDebitActions.accountDebitCreateRequest(values))
            setLoading(false)
            setVisible(false)
        }, 2000);
    };

    const formulario=React.cloneElement(children, 
        {registro:handleSubmit, 
        loading:loading, 
        handleCancel:() => setVisible(false),
    } )
    
    return (
        <>
            <Button type="primary" onClick={()=>setVisible(true)}>
                {title}
            </Button>
            <Modal
                visible={visible}
                title={title}
                onOk={()=>setVisible(true)}
                onCancel={()=>setVisible(false)}
                footer={null}
            >
               {formulario}
            </Modal>
        </>
    );
};

export default ModalFormAction;