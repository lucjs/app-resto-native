import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import t from 'tcomb-form-native';
const Form = t.form.Form;
import {RegisterStruct, RegisterOptions} from '../../forms/Register';
import {Button} from 'react-native-elements';


export default class Register extends Component {

    constructor() {
        super();
        this.state = {
            registerStruct: RegisterStruct,
            registerOptions: RegisterOptions,
            formData: {
                name:"",
                email:"",
                password:"",
                passwordConfirmation:""
            }
        }
    }
  
    register = () => {        
        
        const {password, passwordConfirmation} = this.state.formData;
        
        if (password === passwordConfirmation) {            
            
            const validate = this.refs.registerForm.getValue();
            
            if (validate) {                
                console.log("Formulario correcto");                
            }
            else
            {
                console.log("Formulario inválido");
            }
        }
        else {
            console.log("Contreñas no son iguales");
        }
    };

    onChange = (formData) => {
        this.setState ({
            formData
        })
    }


    render(){

        const {registerStruct, registerOptions, formData} = this.state;

        return (
            <View style={styles.viewBody}>               
                <Form
                ref="registerForm"
                type={registerStruct}
                options={registerOptions}
                value={formData}                
                onChange={v => (this.onChange(v))}
                />
                <Button 
                    title ="Unirse" onPress={() => this.register()}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,       
        justifyContent: "center",
        marginLeft: 40,
        marginRight: 40
       
    }
});
