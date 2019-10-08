import React from 'react';

import t from 'tcomb-form-native';
import validations from '../utils/Validation';
import inputTemplate from '../templates/input';

export const RegisterStruct = t.struct({
    name: t.String,
    email: validations.email,
    password: validations.password,
    passwordConfirmation: validations.password
});

export const RegisterOptions = {
    fields: {
        name: {         
            template: inputTemplate,
            config: {
                placeholder: "Escribe tu nombre y apellido",            
                iconType: "material-comunity",
                iconName: "account-box"
              }
        },
        email: {           
            template: inputTemplate,
            config: {
                placeholder: "Escribe tu email",              
                iconType: "material-comunity",
                iconName: "email"
              }
        },
        password: {         
            template: inputTemplate,
            config: {
                placeholder: "Escribe tu contraseña",              
                iconType: "material-comunity",
                iconName: "lock-outline",
                password: true,
                secureTextEntry: true
              }
        },
        passwordConfirmation: {           
            template: inputTemplate,
            config: {
                placeholder: "Repite tu contraseña",              
                iconType: "material-comunity",
                iconName: "lock",
                password: true,
                secureTextEntry: true
              }
        }
    }
}
