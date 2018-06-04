// Screen with a list of functionalities
import React from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

export default class Menu extends React.Component {
  constructor(props){
    super(props);
  }

  logout = () => {
    
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
              onPress={() => {}}
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
