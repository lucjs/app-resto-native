import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator} from 'react-native';
import { Image } from 'react-native-elements';
import Toast, {DURATION} from 'react-native-easy-toast';

import t from 'tcomb-form-native';
const Form = t.form.Form;
import {LoginStruct, LoginOptions} from '../../forms/LoginForm';
import {Button, Text} from 'react-native-elements';

import * as firebase from 'firebase';

export default class Login extends Component {

  constructor() {
    super();
    this.state = {
        loginStruct: LoginStruct,
        loginOptions: LoginOptions,
        formData: {
            email:"",
            password:""           
        },
        formErrorMessage:""
    }
}

login = () => {        
        
      const validate = this.refs.loginForm.getValue();
      //clear
      this.setState({formErrorMessage: ""}); 
      //console.log("Registro Correcto");      
      if (!validate) {
        this.refs.toast.show('Inicio incorrecto, revise sus datos.', 2500) 
      } else {
        this.setState({ formErrorMessage: "" });
        firebase
          .auth()
          .signInWithEmailAndPassword(validate.email, validate.password)
          .then(resolve => {
            this.refs.toast.show('Iniciando Sesion...', 200, () => {
                //this.props.navigation.navigate('Home');
                 this.props.navigation.goBack();
            });                         
                }).catch(err => {
                  
                  this.refs.toast.show('Inicio incorrecto, revise sus datos.', 2500)                  
                  /* Sencible
                  see - console.log(err.code)
                  const errorCode = err.code;
                  if (errorCode === "auth/wrong-password") {
                    this.refs.toast.show('La contraseña es incorrecta.', 2500)
                  }
                  if (errorCode === "auth/user-not-found") {
                    this.refs.toast.show('El usuario no existe.', 2500)
                  }*/
                })
        }  
      
  };

onChange = (formData) => {
  this.setState ({
      formData
  })
}

    render(){
       
      const {loginStruct, loginOptions, formData, formErrorMessage} = this.state;
        return (
          <View style={styles.viewBody}>
            <Image
              source={require('../../../assets/img/5-tenedores-letras-icono-logo.png')}
              style={styles.logo}
              PlaceholderContent={<ActivityIndicator />}
              resizeMode="contain"
            />   
             <View style={styles.viewForm}>               
                <Form
                ref="loginForm"
                type={loginStruct}
                options={loginOptions}
                value={formData}                
                onChange={value => (this.onChange(value))}
                />
                <Button 
                    buttonStyle = {styles.buttonLoginStyle}
                    title = "Iniciar" onPress={() => this.login()}
                />
                <Text style ={styles.formErrorStyle}>{formErrorMessage}</Text>
                <Toast
                    ref="toast"                   
                    position='bottom'
                    positionValue={420}
                    fadeInDuration={1000}
                    fadeOutDuration={1000}
                    opacity={0.8}
                    textStyle={{color:'#fff'}}
                />
            </View>       
          </View>
        );
    }
}

const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 150   
  },
  viewBody: {
    flex: 1,
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40
  },
  viewForm:{
    marginTop: 50
  },
  buttonLoginStyle: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10
  },
  formErrorStyle: {
    color: "#f00",
    textAlign: "center",
    marginTop: 30
  }
});
