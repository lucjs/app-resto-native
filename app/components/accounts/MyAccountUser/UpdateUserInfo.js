import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ListItem } from "react-native-elements";
import OverlayOneInput from "../../Elements/OverlayOneInput";
import OverlayTwoInputs from "../../Elements/OverlayTwoInputs";
import OverlayThreeInputs from "../../Elements/OverlayThreeInputs";
import Toast, { DURATION } from "react-native-easy-toast";

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
          onPress: () =>
            this.openOverlay(
              "Nombre y Apellido",
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
          onPress: () =>
            this.openOverlayTwoInputs(
              "Email",
              "Password",
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
          onPress: () =>
            this.openOverlayThreeInputs(
              "Tu contraseña",
              "Nueva contraseña",
              "Repetir nueva contraseña",
              this.updateUserPassword
            )
        }
      ]
    };
  }

  updateUserDisplayName = async newDisplayName => {
    if (newDisplayName) {
      this.state.updateUserDisplayName(newDisplayName);
    }
    this.setState({
      overlayComponent: null
    });
  };

  openOverlay = (placeholder, inputValue, updateFunction) => {
    this.setState({
      overlayComponent: (
        <OverlayOneInput
          isVisibleOverlay={true}
          placeholder={placeholder}
          updateFunction={updateFunction}
          inputValue={inputValue}
        />
      )
    });
  };

  openOverlayTwoInputs = (
    placeholderOne,
    placeholderTwo,
    inputValueOne,
    updateFunction
  ) => {
    this.setState({
      overlayComponent: (
        <OverlayTwoInputs
          isVisibleOverlay={true}
          placeholderOne={placeholderOne}
          placeholderTwo={placeholderTwo}
          inputValueOne={inputValueOne}
          inputValueTwo=""
          isPassword={true}
          updateFunction={updateFunction}
        />
      )
    });
  };

  openOverlayThreeInputs = (
    placeholderOne,
    placeholderTwo,
    placeholderThree,
    updateFunction
  ) => {
    this.setState({
      overlayComponent: (
        <OverlayThreeInputs
          isVisibleOverlay={true}
          placeholderOne={placeholderOne}
          placeholderTwo={placeholderTwo}
          placeholderThree={placeholderThree}
          inputValueOne=""
          inputValueTwo=""
          inputValueThree=""
          isPassword={true}
          updateFunction={updateFunction}
        />
      )
    });
  };

  updateUserPassword = async (currentPass, newPass, repeatPass) => {
    
    if (currentPass && newPass && repeatPass) {
      if (newPass === repeatPass) {
        if (currentPass === newPass) {
          this.refs.toast.show(
            "La nueva contraseña no puede ser igual a la actual"
          );
        } else {
          this.state.updateUserPassword(currentPass, newPass);
        }
      } else {
        this.refs.toast.show("Las nuevas contraseñas deben ser iguales");
      }
    } else {
      this.refs.toast.show("Tienes que completar todos los campos");
    }

    this.setState({
      overlayComponent: null
    });
  };

  updateUserEmail = async (newEmail, password) => {
    const emailOld = this.props.userInfo.email;

    if (emailOld !== newEmail) {
      this.state.updateUserEmail(newEmail, password);
    }
    this.setState({
      overlayComponent: null
    });
  };

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
        <Toast
          ref="toast"
          position="center"
          positionValue={0}
          fadeInDuration={1000}
          fadeOutDuration={1000}
          opacity={0.8}
          textStyle={{ color: "#fff" }}
        />
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
