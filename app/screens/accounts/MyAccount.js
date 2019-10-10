import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as firebase from 'firebase';
import MyAccountGuest from '../../components/accounts/MyAccountGuest';
import MyAccountUser from '../../components/accounts/MyAccountUser/index';

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
           return <MyAccountUser /> 
        } 
        else {
            return <MyAccountGuest goToScreen={this.goToScreen}/>       
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
