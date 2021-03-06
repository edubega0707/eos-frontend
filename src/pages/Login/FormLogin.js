import React from 'react';
import {Button} from 'antd'
import { Formik, Form, FastField} from "formik";
import { FieldText, FieldPassword } from '../../components/inputs';
import { validationSchema } from '../../utils/formValidations';
import {useDispatch} from 'react-redux'
import { userActions } from '../../redux/actions/actionsAuth';

const styles={
    containerButton:{
        display:"flex",
        justifyContent: 'center',
    }
}
const FormLogin = (props) => {
    const dispatch=useDispatch()

    const onSubmit = values => {
        dispatch(userActions.loginRequest(values))
      };
     
    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <FastField name="username" >
                    {props => <FieldText {...props} placeholder="Usuario" />}
                </FastField>
                <FastField name="password" >
                    {props => <FieldPassword {...props} placeholder="Contraseña" />}
                </FastField>
                <div style={styles.containerButton}>
                    <Button type="primary" htmlType="submit" >
                        Inciar Sesión
                    </Button>
                </div>

            </Form>
        </Formik>
    );
};

export default FormLogin;