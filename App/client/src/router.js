import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import Login from './components/Login'
import Registration from './components/Registration'
import Menu from './components/Menu'
import Profile from './components/Profile'
import kreirajSalu from './components/kreirajSalu/kreirajSalu.js'

export const SignedOut = createStackNavigator({
    Registration: {
        screen: Registration,
        navigationOptions: {
            title: "Registration"
        }
    },
    Login: {
        screen: Login,
        navigationOptions: {
            title: "Login"
        }
    }
})

export const SignedIn = createBottomTabNavigator({
  kreirajSalu:{
    screen: kreirajSalu,
    navigationOptions:{
      tabBarLabel: "Create"
    }
  },
    Menu: {
        screen: Menu
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "Profile"
        }
    }
},{
    tabBarOptions: {
      labelStyle: {
        fontSize: 18,
        paddingBottom: 12
      },
      showIcon: false
    }
})

export const createRootNavigator = (signedIn = false) => {
    return createSwitchNavigator(
        {
            SignedIn: {
                screen: SignedIn
            },
            SignedOut: {
                screen: SignedOut
            }
        },
        {
            initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
        }
    )
}
