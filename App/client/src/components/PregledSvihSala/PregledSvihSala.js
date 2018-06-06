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
        isLoading: true,
        data: [],
        naziv: '1-14'
      }
      this.getClassroomId = this.getClassroomId.bind(this);
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
  this.props.navigation.navigate("ClassroomDetails", {id: classroomId});
}
/*
* Dodati da se ispisuje kao lista
*/
componentDidMount(){
  this.getAllClassrooms();
}
render() {
   var reload = this.props.navigation.getParam("reload", false);
   if(reload){
     this.getAllClassrooms();
      reload = false;
   }

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" />
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
