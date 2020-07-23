import React from 'react';
import {Button} from 'antd'
import { Formik, Form, FastField} from "formik";
import { FieldText, FieldPassword } from '../../../components/inputs';
import { validationFormRegister } from '../../../utils/formValidations';
import AccountDebitCard from '../../../components/AccountDebitCard';
import {useSelector} from 'react-redux'

const styles={
    containerButton:{
        display:"flex",
        justifyContent: 'center',
    }
}


const FormDeposito = (props) => {
    const profile= useSelector(state => state.profileReducer.profile)
    //const typeAccounts= useSelector(state => state.typeAccountsReducer.typeAcounts)

    const{registro, loading}=props
    const onSubmit = values => {
        registro(values)       
    };
    const initialValues={ 
        user_account: profile.id, 
    }
    return (
        <Formik
            initialValues={initialValues}
            //validationSchema={validationFormRegister}
            onSubmit={registro}
        >
            <Form>

                <div style={styles.containerButton}>
                    <Button type="primary" htmlType="submit"loading={loading} >
                        Enviar
                    </Button>
                </div>

            </Form>
        </Formik>
    );
};

export default FormDeposito;