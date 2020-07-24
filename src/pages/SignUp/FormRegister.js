import React from 'react';
import {Button} from 'antd'
import { Formik, Form, FastField} from "formik";
import { FieldText, FieldPassword } from '../../components/inputs';
import { validationFormRegister } from '../../utils/formValidations';
import {useDispatch} from 'react-redux'
import { userActions } from '../../redux/actions/actionsAuth';

const styles={
    containerButton:{
        display:"flex",
        justifyContent: 'center',
    }
}
const FormRegister = (props) => {
    const dispatch=useDispatch()
    const onSubmit = values => {
        dispatch(userActions.signInRequest(values))   
      };
     
    return (
        <Formik
            initialValues={{ email:'', username: '', password: ''}}
            validationSchema={validationFormRegister}
            onSubmit={onSubmit}
        >
            <Form>
                <FastField name="email" >
                    {props => <FieldText {...props} placeholder="Correo Electronico" />}
                </FastField>
                <FastField name="username" >
                    {props => <FieldText {...props} placeholder="Usuario" />}
                </FastField>
                <FastField name="password" >
                    {props => <FieldPassword {...props} placeholder="Contraseña" />}
                </FastField>
                {/* <FastField name="password_check" >
                    {props => <FieldPassword {...props} placeholder="Repetir Contraseña" />}
                </FastField> */}
                <div style={styles.containerButton}>
                    <Button type="primary" htmlType="submit" >
                        Registrarse
                    </Button>
                </div>

            </Form>
        </Formik>
    );
};

export default FormRegister;