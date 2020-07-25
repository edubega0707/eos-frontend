import React from 'react';
import {Button} from 'antd'
import { Formik, Form, FastField} from "formik";
import { FieldText, FieldDataAmmount } from '../../../components/inputs';
import {validationFormRetiro } from '../../../utils/formValidations';

const styles={
    containerButton:{
        display:"flex",
        justifyContent: 'center',
    }
}


const FormRetiro = (props) => {
    const{account}=props
    const{registro, loading}=props

    const initialValues={ 
        user: account.user_account.id, 
        account:account.id,
        type_transaction:'RETIRO',
        ammount:'',
        reference:''
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={()=>validationFormRetiro(account)}
            onSubmit={registro}
        >
            <Form>
                <FastField name="ammount" >
                    {props => <FieldDataAmmount {...props} placeholder="Cantidad a retirar" />}
                </FastField>
                <FastField name="reference" >
                    {props => <FieldText {...props} placeholder="referencia" />}
                </FastField>
                <div style={styles.containerButton}>
                    <Button type="primary" htmlType="submit"loading={loading} >
                        Retirar
                    </Button>
                </div>

            </Form>
        </Formik>
    );
};

export default FormRetiro;