import React, { Component } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import {Button, Image, Text} from 'react-native-elements';


export default class MyAccountGuest extends Component {

    constructor(props){
        super(props);
        //console.log(props);        
    }

                 render() {

                 const { goToScreen } = this.props;

                   return (
                     <View style={styles.viewBody}>
                       <Text>Account Guest...</Text>                      
                        <Image
                         source={require("../../../assets/img/invitado.png")}
                         style={styles.img}
                         PlaceholderContent={<ActivityIndicator />}
                         resizeMode="contain"
                       />
                       <Text style={styles.title}>Consulta tu perfil en Resto Native</Text>
                       <Text style={styles.description}>¿Como describirias tu mejor restaurante? Busca y visualiza
                              los mejores restaurantes de una forma sencilla, vota cual 
                              te ha gustado mas y comenta como ha sido tu experiencia.
                       </Text>
                       <Button 
                       buttonStyle={styles.botonViewProfile}
                       title="Ver tu perfil" 
                       onPress={() => goToScreen("Login")}
                       />
                     </View>
                     );
                 }
               }

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: 30,
        paddingRight: 30   
    },
    img: {
        height: 150,
        marginBottom: 40
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 10
    },
    description: {
        textAlign: "center",
        marginBottom: 20
    },
    botonViewProfile: {
        width: "100%",                   
        backgroundColor: "#00a680"
       
    }
});