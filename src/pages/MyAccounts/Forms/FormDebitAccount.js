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

function genRand() {
    return Math.floor(Math.random()*89999+10000);
 }

const FormDebitAccount = (props) => {
    const profile= useSelector(state => state.profileReducer.profile)
    const typeAccounts= useSelector(state => state.typeAccountsReducer)

    const{registro, loading}=props
    const onSubmit = values => {
        registro(values)       
    };

    const initialValues={ 
        user_account: profile.id, 
        number_account:genRand(), 
        type_account: typeAccounts.typeAcountsStatus.status==="success"?
            typeAccounts.typeAcounts.find(type=>type.title_account==="DEBIT").id:
            null
    }
    return (
        <Formik
            initialValues={initialValues}
            //validationSchema={validationFormRegister}
            onSubmit={onSubmit}
        >
            <Form>
                <div>
                    <AccountDebitCard account={initialValues} />
                </div>
                <div style={styles.containerButton}>
                    <Button type="primary" htmlType="submit"loading={loading} >
                        Create Account
                    </Button>
                </div>

            </Form>
        </Formik>
    );
};

export default FormDebitAccount;