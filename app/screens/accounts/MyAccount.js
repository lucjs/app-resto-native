import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from 'react-native-elements';

import * as firebase from 'firebase';

export default class MyAccount extends Component {

      
    //priority II
    componentDidMount() {
        firebase.auth().onAuthStateChanged(userLogueado => {
            userLogueado
            //console.log(userLogueado);
        });
    }

   /*componentDidMount(){ //TEST DE PROPS
       console.log(this.props);
   }*/

   goToScreen = nameScreen => {
        this.props.navigation.navigate(nameScreen);
    }

    render(){
        return (
            <View style={styles.viewBody}>
                <Text>MyAccount Screen...</Text>
                <Button title="Registrarse" onPress={() => this.goToScreen('Register')}/>
                <Button title="Login" onPress={() => this.goToScreen('Login')}/>
            </View>
        );
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
