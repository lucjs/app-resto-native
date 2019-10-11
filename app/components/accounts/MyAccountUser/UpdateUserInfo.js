import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import OverlayOneInput from "../../Elements/OverlayOneInput";

export default class UpdateUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    ...props,
    overlayComponent: null,
    menuItems: [
        {
          title: "Cambiar Nombre y Apellido",
          iconType: "material-comunity",
          iconNameRight: "chevron-right",
          iconColorRight: "#ccc",
          iconNameLeft: "account-circle",
          iconColorLeft: "#ccc",
          onPress: () => this.openOverlay("Nombre y Apellido", 
          this.updateUserDisplayName,
          props.userInfo.displayName )
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

  openOverlay = (placeholder, updateFunction, inputValue) => {
    this.setState({
        overlayComponent:<OverlayOneInput isVisibleOverlay={true} 
        placeholder={placeholder}
        updateFunction={updateFunction}
        inputValue={inputValue} />
    });
  };

  updateUserDisplayName = async (newDisplayName) => {
      if (newDisplayName) {
        this.state.updateUserDisplayName(newDisplayName);
      }       
        this.setState({
            overlayComponent:null
        });
  }

  render() {
    const { menuItems, overlayComponent } = this.state;
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
        {overlayComponent}     
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
