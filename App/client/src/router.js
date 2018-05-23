import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import Login from './components/Login'
import Registration from './components/Registration'
import Menu from './components/Menu'
import Profile from './components/Profile'

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
    Menu: {
        screen: Menu
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: "Profile"
        }
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