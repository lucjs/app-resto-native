import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import * as firebase from 'firebase';

export default class MyAccount extends Component {

    constructor(){
        super();
        this.state = {
            login: false
        }
    }
      
    //priority II
    async componentDidMount() {
        await firebase.auth().onAuthStateChanged(v => {
            if (v) {
                this.setState({
                    login: true
                });
            } 
            else {
                this.setState({
                    login: false
                });
            }
            //if logged _> console.log(userLogueado), return atributes api auth;
        });
    }

   /*componentDidMount(){ //TEST DE PROPS
       console.log(this.props);
   }*/

   goToScreen = nameScreen => {
        this.props.navigation.navigate(nameScreen);
    }

   logout = () => {
        firebase.auth().signOut();
   } 


    render() {

        const {login} = this.state;
        
        if (login) {
              return (
                <View style={styles.viewBody}>
                    <Text>Estas loguedado correctamente...</Text>                   
                    <Button title="Cerrar Sesion" onPress={() => this.logout()}/>
                </View>
            );      
        } 
        else {
            return (
                <View style={styles.viewBody}>
                    <Text>MyAccount Screen...</Text>
                    <Button title="Registrarse" onPress={() => this.goToScreen('Register')}/>
                    <Button title="Login" onPress={() => this.goToScreen('Login')}/>
                </View>
            );
        }        
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    }
});
