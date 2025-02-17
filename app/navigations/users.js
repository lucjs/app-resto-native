import React from 'react';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';


//Screens
import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import TopFiveScreen from '../screens/TopFive';
//Screen Account
import MyAccountScreen from '../screens/accounts/MyAccount';
import RegisterScreen from '../screens/accounts/Register';
import LoginScreen from '../screens/accounts/Login';

const homeScreenStack = createStackNavigator ({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            title: "Home"
        })
    }
});

const topFiveScreenStack = createStackNavigator ({
    TopFive: {
        screen: TopFiveScreen,
        navigationOptions: ({navigation}) => ({
            title: "Top 5 Restaurantes"
        })
    }
});

const searchScreenStack = createStackNavigator ({
    Search: {
        screen: SearchScreen,
        navigationOptions: ({navigation}) => ({
            title: "Buscar"
        })
    }
});

const myAccountScreenStack = createStackNavigator ({
    MyAccount: {
        screen: MyAccountScreen,
        navigationOptions: ({navigation}) => ({
            title: "Mi Cuenta"
        })
    },
    Register: {
        screen: RegisterScreen,
        navigationOptions: ({navigation}) => ({
            title: "Registrarse"
        })
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: ({navigation}) => ({
            title: "Login"
        })
    }
});

const RootStack = createBottomTabNavigator({
    Home: {
        screen: homeScreenStack,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: "Home",
            tabBarIcon: ({tintColor}) => <Icon 
            name="home-outline"
            type="material-community"
            size={22} 
            color={tintColor}
             />
        })
    },
    TopFive: {
        screen: topFiveScreenStack,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: "Top 5",
            tabBarIcon: ({tintColor}) => <Icon 
            name='star-outline' 
            type="material-community"
            size={22} color={tintColor} 
             />
        })
    },
    Search: {
        screen: searchScreenStack,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: "Search",
            tabBarIcon: ({tintColor}) => <Icon 
            name='magnify' 
            type="material-community"
            size={22} color={tintColor} 
             />
        })
    },
    MyAccount: {
        screen: myAccountScreenStack,
        navigationOptions: ({navigation}) => ({
            tabBarLabel: "Account",
            tabBarIcon: ({tintColor}) => <Icon 
            name='account-check-outline' 
            type="material-community"
            size={22} color={tintColor} 
             />
        })
    }
},

{
    initialRouteName: "MyAccount",
    order: ['Home', 'TopFive','Search', 'MyAccount'],
    tabBarOptions: {
        inactiveTintColor: "#646464",
        activeTintColor: "#00a680"
    }
});

export default createAppContainer(RootStack);

















