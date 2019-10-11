import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem } from "react-native-elements";

export default class UpdateUserInfo extends Component {
  constructor() {
    super();
    this.state = {
      menuItems: [
        {
          title: "Cambiar Nombre y Apellido",
          iconType: "material-comunity",
          iconNameRight: "chevron-right",
          iconColorRight: "#ccc",
          iconNameLeft: "account-circle",
          iconColorLeft: "#ccc",
          onPress: () => {}
        },
        {
          title: "Cambiar Email",
          iconType: "material-comunity",
          iconNameRight: "chevron-right",
          iconColorRight: "#ccc",
          iconNameLeft: "email",
          iconColorLeft: "#ccc",
          onPress: () => {}
        },
        {
          title: "Cambiar Contraseña",
          iconType: "material-comunity",
          iconNameRight: "chevron-right",
          iconColorRight: "#ccc",
          iconNameLeft: "lock",
          iconColorLeft: "#ccc",
          onPress: () => {}
        }
      ]
    };
  }

  render() {
    const { menuItems } = this.state;
    return (
      <View>
        {menuItems.map((item, index) => (
          <ListItem
            key={index}
            title={item.title}
            leftIcon={{
              type: item.iconType,
              name: item.iconNameLeft,
              color: item.iconColorLeft
            }}
            rightIcon={{
              type: item.iconType,
              name: item.iconNameRight,
              color: item.iconColorRight
            }}
            onPress={item.onPress}
            containerStyle={styles.contentContainerStyle}
          />
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentContainerStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3"
  }
});
