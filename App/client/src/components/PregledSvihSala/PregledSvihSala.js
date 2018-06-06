import React from 'react'
import { ScrollView, Text, View, TextInput, Header, Button,AppRegistry, ActivityIndicator, FlatList, StyleSheet, Alert } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { H1, Footer, FooterTab } from 'native-base';
import Classroom from '../../models/Classroom';
import ClassroomItem from '../ClassroomItem/ClassroomItem.js';
import apiHelper from '../../utils/apiHelper.js'
import styles from './style.js';



export default class PregledSvihSala extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        checked: false,
        isLoading: false,
        data: [],
        naziv: '1-14'
      }
    }

getAllClassrooms(){
  apiHelper('/classroom/getAllClassrooms', 'GET', {}) //uporediti sa mumetovim url-om
    .then((response) => response.json())
    .then((responseJson) => {
      var classrooms = responseJson.map((item) => new Classroom(item));
      this.setState({
        isLoading: false,
        data: classrooms
      })
    })
    .catch((error) => console.log(error) );
}

getClassroomId(classroomId){
  Alert.alert(classroomId);
}
/*
* Dodati da se ispisuje kao lista
*/
componentDidMount(){
  this.getAllClassrooms();
}
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
        <FlatList
          data={this.state.data}
          renderItem={({item}) => <ClassroomItem classroom={item} onPressItem={this.getClassroomId}/> }
          keyExtractor={(item, key) => `${key}`}
          ListEmptyComponent={() => (<Text style={styles.noItems}>Currently there are no classrooms registered.</Text>)}
        />
      </View>
    );
  }
}
