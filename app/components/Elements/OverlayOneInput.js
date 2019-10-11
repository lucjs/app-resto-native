import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Overlay, Input, Button } from 'react-native-elements';

export default class OverlayOneInput extends Component {

    constructor(props){
        super(props);
        this.state = {
            ...props
        }           
        console.log(this.state);   
    }
    render(){
        const { isVisibleOverlay } = this.state;
        return (
            <Overlay 
            isVisible={isVisibleOverlay} 
            overlayBackgroundColor="transparent"
            overlayStyle={styles.overlayStyle}
            >
                <View 
                style={styles.viewOverlay}>
                    <Input 
                    placeholder="Texto....."
                    containerStyle={styles.inputContainer}
                    //onChangeText={value => console.log(value)}
                    value=""
                    />
                    <Button 
                    title="Actualizar"
                    buttonStyle={styles.btnStyle}
                    />
                </View>
            </Overlay>
        );
    }
}

const styles = StyleSheet.create({
    overlayStyle:{
        flex: 1,
        alignItems:"center",
        justifyContent:"center"
    },
    viewOverlay:{
        width: "100%",
        backgroundColor: "#fff",
        padding: 20,
        borderColor: "#00a680",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1
    },
    inputContainer: {
        marginBottom: 20
    },
    btnStyle: {
        backgroundColor: "#00a680"
    }
});
