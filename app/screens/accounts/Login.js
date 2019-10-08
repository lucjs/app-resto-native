import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Login extends Component {
    render(){
        return (
            <View style={styles.viewBody}>
                <Text>Login Screen...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    viewBody: {
        flex: 1,       
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 40,
        marginRight: 40       
    },
});