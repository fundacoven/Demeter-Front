import * as yup from "yup";

const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .required("El nombre es obligatorio")
    .max(20, "Máximo 20 caracteres"),
  email: yup
    .string()
    .required("El email es obligatorio")
    .email("Email inválido"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(6, "Mínimo 6 caracteres"),
});

export { RegisterSchema }; 