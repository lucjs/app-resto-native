import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Avatar } from "react-native-elements";
import * as firebase from "firebase";
import UpdateUserInfo from "./UpdateUserInfo";
import Toast, {DURATION} from "react-native-easy-toast";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
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

  reauthenticate = currentPassword => {
    const user = firebase.auth().currentUser;
    const credentials = firebase.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(credentials);
  };

  checkUserAvatar = photoURL => {
    return photoURL
      ? photoURL
      : "https://api.adorable.io/avatars/255/abott@adorable.png";
  };

  updateUserDisplayName = async newDisplayName => {
    const update = {
      displayName: newDisplayName
      //photoURL: 'https://my-cdn.com/assets/user/123.png',
    };
    await firebase.auth().currentUser.updateProfile(update);
    this.getUserInfo();
  };

  updateUserEmail = async (newEmail, password) => {
    this.reauthenticate(password).then(() => {
        const user = firebase.auth().currentUser;
        user.updateEmail(newEmail).then(() => {       
            this.refs.toast.show("Email actualizado correctamente, vuelve a iniciar sesión", 50, () => {
              firebase.auth().signOut();
            })          
          }).catch(err => {
            console.log(err);
            this.refs.toast.show(err, 1500);
          });
      }).catch(err => {     
        this.refs.toast.show("Tu contraseña no es correcta", 1500);
      });
  };

  returnUpdateUserInfoComponent = userInfoData => {
    if (userInfoData.hasOwnProperty("uid")) {
      return (
        <UpdateUserInfo
          userInfo={this.state.userInfo}
          updateUserDisplayName={this.updateUserDisplayName}
          updateUserEmail={this.updateUserEmail}
        />
      );
    }
  };

  changeAvatarUserPhoto = async () => {
    const resultPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    //console.log(result); 
    if (resultPermissions.status === "denied") {
      this.refs.toast.show("Es necesario aceptar los permisos para acceder a la galeria", 1500);
    } else {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }
    };
    
  }



  render() {
    const { displayName, email, photoURL } = this.state.userInfo;

    //console.log(this.checkUserAvatar(photoURL));

    return (
      <View>
        <View style={styles.viewUserInfo}>
          <Avatar
            rounded
            size="large"
            showEditButton
            onEditPress= {()=>this.changeAvatarUserPhoto()}
            source={{ uri: this.checkUserAvatar(photoURL) }}
            containerStyle={styles.userInfoAvatar}
          />
          <View>
            <Text style={styles.displayName}>{displayName}</Text>
            <Text>{email}</Text>
          </View>
        </View>
        {this.returnUpdateUserInfoComponent(this.state.userInfo)}
          <Toast
          ref="toast"
          position="bottom"
          positionValue={250}
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
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
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
