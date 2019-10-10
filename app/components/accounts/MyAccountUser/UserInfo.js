import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import * as firebase from "firebase";
import UpdateUserInfo from "./UpdateUserInfo";

export default class UserInfo extends Component {
  constructor(state) {
    super(state);
    this.state = {
      userInfo: {}
      /* userInfo: {displayName: "", email: "", photoURL: ""} */
    };
  }

  componentDidMount = async () => {
    await this.getUserInfo();
    //console.log(this.state.userInfo);
  };

  getUserInfo = () => {
    const user = firebase.auth().currentUser;
    user.providerData.forEach(userInfo => {
      this.setState({
        userInfo
      });
    });
  };

  checkUserAvatar = photoURL => {
    return photoURL
      ? photoURL
      : "https://api.adorable.io/avatars/255/abott@adorable.png";
  };

  render() {
    const { displayName, email, photoURL } = this.state.userInfo;

    //console.log(this.checkUserAvatar(photoURL));

    return (
      <View>
        <View style={styles.viewUserInfo}>
          <Avatar
            rounded
            size="large"
            source={{ uri: this.checkUserAvatar(photoURL) }}
            containerStyle={styles.userInfoAvatar}
          />
          <Text style={styles.displayName}>{displayName}</Text>
          <Text>{email}</Text>
        </View>
        <UpdateUserInfo />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent:"center",
    flexDirection: "row",
    paddingTop: 30,
    paddingBottom: 30,
    backgroundColor: "#f2f2f2" 
  },
  userInfoAvatar: {
    marginRight: 20
  },
  displayName: {
      fontWeight: "bold"
  }
});