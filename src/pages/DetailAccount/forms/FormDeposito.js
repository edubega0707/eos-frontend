import React from 'react';
import {Button} from 'antd'
import { Formik, Form, FastField} from "formik";
import { FieldText, FieldDataAmmount } from '../../../components/inputs';
import {validationFormDeposito } from '../../../utils/formValidations';
import {useSelector} from 'react-redux'

const styles={
    containerButton:{
        display:"flex",
        justifyContent: 'center',
    }
}


const FormDeposito = (props) => {
    const{account}=props
    const profile= useSelector(state => state.profileReducer.profile)
    //const typeAccounts= useSelector(state => state.typeAccountsReducer.typeAcounts)
    const{registro, loading}=props

    const initialValues={ 
        user: profile.id, 
        account:account.id,
        type_transaction:'DEPOSITO',
        ammount:'',
        reference:''
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={()=>validationFormDeposito(account)}
            onSubmit={registro}
        >
            <Form>
                <FastField name="ammount" >
                    {props => <FieldDataAmmount {...props} placeholder="Cantidad a depositar" />}
                </FastField>
                <FastField name="reference" >
                    {props => <FieldText {...props} placeholder="referencia" />}
                </FastField>
                <div style={styles.containerButton}>
                    <Button type="primary" htmlType="submit"loading={loading} >
                        Depositar
                    </Button>
                </div>

            </Form>
        </Formik>
    );
};

export default FormDeposito;