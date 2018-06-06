import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import Login from './components/Login'
import Registration from './components/Registration'
import Menu from './components/Menu'
import Profile from './components/Profile'
import KreirajSalu from './components/KreirajSalu/KreirajSalu.js'
import pregledSala from './components/PregledSvihSala/PregledSvihSala.js'
import SalaDetalji from './components/SalaDetalji/SalaDetalji.js'

export const SignedOut = createStackNavigator({
  /*
    Dodati pregledSala da se pokrene nakon logovanja, u slucaju da je samo korisnik, a u slucaju da je admin ima drugi prikaz
  */


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
      screen: KreirajSalu,
      navigationOptions:{
        title: "Create classroom"
      }
    },
    ClassroomOverview:{
      screen: pregledSala,
      navigationOptions:{
        title: "Classrom overview"
      }
    },
    ClassroomDetails: {
      screen: SalaDetalji,
      navigationOptions:{
        title: "Classrom details"
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
