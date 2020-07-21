
import * as Yup from "yup";

export const validationSchema = Yup.object({
    username: Yup.string()
    .required("Campo requerido"),
    password: Yup.string()
      .required("Campo Requerido")
  });

export const validationFormRegister=Yup.object({
  username: Yup.string()
    .min(10, 'Muy corto minimo 10 caracteres!')
    .max(15, 'Muy largo maximo 15 caracteres')
    .required("Campo requerido"),
  email: Yup.string()
           .email('Email invalido')
           .required('Campo requerido'),
})