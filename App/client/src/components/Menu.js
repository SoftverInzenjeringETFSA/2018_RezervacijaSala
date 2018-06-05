// Screen with a list of functionalities
import React from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { onSignOut, getUsername } from '../auth.js';
import User from '../models/User.js';

export default class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state = { username: null }
    getUsername().then((response) => this.setState({ username: response }));
    this.logout = this.logout.bind(this);
  }
  logout = () => {
<<<<<<< HEAD
    console.log(this.state.username);
    User.logout(this.state.username).then((responseJson) =>{

      console.log(responseJson);
      onSignOut().then(() => this.props.navigation.navigate("SignedOut"))
    })
=======

>>>>>>> b3da2174eb14d5d9f935276cbf947cfd2dc1f0b9
  }

  render(){
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
              <Button
                  title="Pregled sala"
                  onPress={() => { this.props.navigation.navigate("ClassroomOverview")}}
                  containerViewStyle={styles.MenuItemStyle}
                  backgroundColor="#03A9F4"
              />
              <Button
                  title="Kreiranje sala"
                  onPress={() => { this.props.navigation.navigate("ClassroomCreation")}}
                  containerViewStyle={styles.MenuItemStyle}
                  backgroundColor="#03A9F4"
              />
              <Button
                  title="Pretraga sala"
                  onPress={() => "dummyFunction"}
                  containerViewStyle={styles.MenuItemStyle}
                  backgroundColor="#03A9F4"
              />
              <Button
                  title="Detalji sala"
                  onPress={() => { this.props.navigation.navigate("ClassroomDetails")}}
                  containerViewStyle={styles.MenuItemStyle}
                  backgroundColor="#03A9F4"
              />
              <Button
                  title="Pregled rezervisanih sala"
                  onPress={() => "dummyFunction"}
                  containerViewStyle={styles.MenuItemStyle}
                  backgroundColor="#03A9F4"
              />
              <Button
                  title="Pregled rezervacija"
                  onPress={() => "dummyFunction"}
                  containerViewStyle={styles.MenuItemStyle}
                  backgroundColor="#03A9F4"
              />
              <Button
                  title="Pregled kvarova"
                  onPress={() => "dummyFunction"}
                  containerViewStyle={styles.MenuItemStyle}
                  backgroundColor="#03A9F4"
              />
              <Button
                  title="Generisanje izvještaja"
                  onPress={() => "dummyFunction"}
                  containerViewStyle={styles.MenuItemStyle}
                  backgroundColor="#03A9F4"
              />
              <Button
                  title="Pregled korisnika"
                  onPress={() => "dummyFunction"}
                  containerViewStyle={styles.MenuItemStyle}
                  backgroundColor="#03A9F4"
              />
            </ScrollView>

            <Button
              title="Logout"
              onPress={() => {this.logout()}}
              containerViewStyle={styles.LogoutBtn}
            />
        </View>
    )
  }
}

const styles = StyleSheet.create({
  MenuItemStyle:{
    marginBottom: 10
  },
  LogoutBtn:{
    position:'absolute',
    bottom: 10,
    right: 0,
    left: 0
  }

})
