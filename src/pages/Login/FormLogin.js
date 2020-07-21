import React from 'react';
import {Button} from 'antd'
import { Formik, Form, FastField} from "formik";
import { FieldText } from '../../components/inputs';
import { validationSchema } from '../../utils/formValidations';


const FormLogin = (props) => {

      const onSubmit = values => {
        console.log("form data", values);
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
                    {props => <FieldText {...props} placeholder="Contraseña" />}
                </FastField>
                <Button type="primary" htmlType="submit" >
                    Inciar Sesión
                </Button>

            </Form>
        </Formik>
    );
};

export default FormLogin;