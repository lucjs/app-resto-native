import React from 'react';

import t from 'tcomb-form-native';
import validations from '../utils/Validation';

export const RegisterStruct = t.struct({
    name: t.String,
    email: validations.email,
    password: validations.password,
    passwordConfirmation: validations.password
});

export const RegisterOptions = {
    fields: {
        name: {
            label: "Nombre",
            placeholder: "Escribe tu nombre y apellido",
            error: "Nombre inválido"
        },
        email: {
            label: "Email",
            placeholder: "Escribe tu email",
            error: "Email inválido"
        },
        password: {
            label: "Contraseña",
            placeholder: "Escribe tu contraseña",
            error: "Contraseña inválida",
            password: true,
            secureTextEntry: true
        },
        passwordConfirmation: {
            label: "Confirmar contraseña",
            placeholder: "Repite tu contraseña",
            error: "Contraseña inválida",
            password: true,
            secureTextEntry: true
        }
    }
}
