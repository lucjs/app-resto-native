import React from 'react';

import t from 'tcomb-form-native';
import validations from '../utils/Validation';
import inputTemplate from '../templates/input';

export const LoginStruct = t.struct({
    email: validations.email,
    password: validations.password   
});

export const LoginOptions = {
    fields: {
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
        }      
    }
}
