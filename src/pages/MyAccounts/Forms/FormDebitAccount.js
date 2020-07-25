import React from 'react';
import {Button} from 'antd'
import { Formik, Form} from "formik";
import AccountDebitCard from '../../../components/AccountDebitCard';
import {useSelector} from 'react-redux'

const styles={
    containerButton:{
        display:"flex",
        justifyContent: 'center',
        marginTop:"3em"
    }
}

function genRand() {
    return Math.floor(Math.random()*899999999999+100000000000);
 }

const FormDebitAccount = (props) => {
    const profile= useSelector(state => state.profileReducer.profile)
    const typeAccounts= useSelector(state => state.typeAccountsReducer)
    const ac = React.useMemo(() => {return genRand();},[]);

    const{registro, loading, type}=props
    const onSubmit = values => {
        registro(values)       
    };

    const initialValues={ 
        user_account: profile.id, 
        number_account:ac, 
        type_account: typeAccounts.typeAcountsStatus.status==="success"?
            typeAccounts.typeAcounts.find(typeAccount=>typeAccount.title_account===type).id:
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