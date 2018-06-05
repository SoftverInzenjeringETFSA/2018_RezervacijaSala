import React from 'react'
import { ScrollView, Text, View, TextInput, Header, Button,AppRegistry, ActivityIndicator, ListView, StyleSheet, Alert } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { H1, Footer, FooterTab } from 'native-base';


import api from '../../utils/apiHelper.js'
import styles from './style.js';



export default class PregledSvihSala extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        checked: false,
         isLoading: true,
        data: [{key: 'Zikrija'}, {key: 'Hana'}, {key: 'Zikrija'}, {key: 'Hana'}, {key: 'Zikrija'}, {key: 'Hana'}, {key: 'Zikrija'}, {key: 'Hana'}],
        naziv: '1-14'
    }
}

allClassrooms(){

  return apiHelper('/classroom/getAllClassrooms', 'GET', {}) //uporediti sa mumetovim url-om
        .then((response) => response.json())
            .then((responseJson) => {
                 this.setState({
                 isLoading:false,
                 naziv: responseJson.name
               }, function(){});
          }).catch((error) =>{
                console.error(error);
              });
}

getClassroomId(classroom)
{
    /*
      Poslati id u mumetov dio
    */
    Alert.alert(classroom);
}
ListViewItemSeparator = () => {
  return (
    <View
      style={{
        height: .5,
        width: "100%",
        backgroundColor: "#000",
      }}
    />
  );
}
/*
* Dodati da se ispisuje kao lista
*/
render() {
        if (this.state.isLoading) {
          return (
            <View style={{flex: 1, paddingTop: 20}}>
              <ActivityIndicator />
            </View>
          );
        }

        return (

          <View style={styles.MainContainer}>

            <ListView

              dataSource={this.state.dataSource}

              renderSeparator= {this.ListViewItemSeparator}

              renderRow={(rowData) => <Text style={styles.rowViewContainer}
              onPress={this.GetItem.bind(this, rowData.fruit_name)} >{rowData.fruit_name}</Text>}

            />

          </View>
        );
      }
}
