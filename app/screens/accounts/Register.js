import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';

import t from 'tcomb-form-native';
const Form = t.form.Form;
import {RegisterStruct, RegisterOptions} from '../../forms/Register';
import {Button, Text} from 'react-native-elements';

import * as firebase from 'firebase';

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
            },
            formErrorMessage:""
        }
    }
  
    register = () => {        

      
        const {password, passwordConfirmation} = this.state.formData;
        
        if (password === passwordConfirmation) {           
            
            const validate = this.refs.registerForm.getValue();
            //clear
            this.setState({formErrorMessage: ""}); 
            //console.log("Registro Correcto");
            firebase.auth().createUserWithEmailAndPassword(validate.email, validate.password)
                .then(resolve => {
                    this.refs.toast.show('Registrado correctamente.', 200, () => {
                        this.props.navigation.navigate('MyAccount');
                        //this.props.navigation.goBack();
                    });                         
            }).catch(err => {
                this.refs.toast.show('El email ya esta en uso.', 2500);
            })
            if (validate) {                
                this.setState({formErrorMessage: "Formulario correcto"});              
            }
            else
            {
                this.setState({formErrorMessage: "Formulario inválido"});    
            }
        }
        else {
            this.setState({formErrorMessage: "Las contreñas no son iguales"});         
        }
    };

    onChange = (formData) => {
        this.setState ({
            formData
        })
    }


    render(){

        const {registerStruct, registerOptions, formData, formErrorMessage} = this.state;

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
                    buttonStyle = {styles.buttonRegisterStyle}
                    title = "Unirse" onPress={() => this.register()}
                />
                <Text style ={styles.formErrorStyle}>{formErrorMessage}</Text>
                <Toast
                    ref="toast"                   
                    position='bottom'
                    positionValue={250}
                    fadeInDuration={1000}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'#fff'}}
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
    },
    buttonRegisterStyle: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10
    },
    formErrorStyle: {
        color: "#f00",
        textAlign: "center",
        marginTop:30

    }
});
