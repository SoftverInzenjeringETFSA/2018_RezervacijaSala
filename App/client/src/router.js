import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import Login from './components/Login'
import Registration from './components/Registration'
import Menu from './components/Menu'
import Profile from './components/Profile'
import kreirajSalu from './components/kreirajSalu/kreirajSalu.js'
import pregledSala from './components/PregledSvihSala/PregledSvihSala.js'

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
export const SignedIn = createStackNavigator({
    Menu: {
      screen: Menu,
      navigationOptions:{
        title: "Main menu"
      }
    },
    ClassroomCreation:{
      screen: kreirajSalu,
      navigationOptions:{
        title: "Create classroom"
      }
    },
    ClassroomOverview:{
      screen: pregledSala,
      navigationOptions:{
        title: "Classrom overview"
      }
    }
  }
);


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
