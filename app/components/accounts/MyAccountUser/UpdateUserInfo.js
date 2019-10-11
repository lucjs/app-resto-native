import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import OverlayOneInput from "../../Elements/OverlayOneInput";
import OverlayTwoInputs from "../../Elements/OverlayTwoInputs";

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
          props.userInfo.displayName,
          this.updateUserDisplayName
           )
        },
        {
          title: "Cambiar Email",
          iconType: "material-comunity",
          iconNameRight: "chevron-right",
          iconColorRight: "#ccc",
          iconNameLeft: "email",
          iconColorLeft: "#ccc",
          onPress: () => this.openOverlayTwoInputs("Email", "Password",
          props.userInfo.email,
          this.updateUserEmail
           )
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

  updateUserDisplayName = async (newDisplayName) => {
      if (newDisplayName) {
        this.state.updateUserDisplayName(newDisplayName);
      }       
        this.setState({
            overlayComponent:null
        });
  }

  openOverlay = (placeholder, updateFunction, inputValue) => {
    this.setState({
        overlayComponent:<OverlayOneInput isVisibleOverlay={true} 
        placeholder={placeholder}
        updateFunction={updateFunction}
        inputValue={inputValue} />
    });
  }

  updateUserEmail = async (newEmail, password) => {
    const emailOld = this.props.userInfo.email;

    if (emailOld !== newEmail) {
      this.state.updateUserEmail(newEmail,password);
    }
    this.setState({
      overlayComponent:null
    })
  }

  openOverlayTwoInputs = (placeholderOne, placeholderTwo, inputValueOne, updateFunction) => {
    this.setState({
        overlayComponent: ( <OverlayTwoInputs 
        isVisibleOverlay={true} 
        placeholderOne={placeholderOne}
        placeholderTwo={placeholderTwo}       
        inputValueOne={inputValueOne}
        inputValueTwo=""
        isPassword={true}
        updateFunction={updateFunction}
         /> )
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
