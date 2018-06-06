import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList } from 'react-native';
import styles from './style.js'
import apiHelper from '../../utils/apiHelper.js';

export default class SalaDetalji extends Component{
  constructor(props) {
    super(props)
    const id = this.props.navigation.getParam('id', 'NO-ID');
    console.log(id);
    this.state = {
      id: id,
      checked: false,
      data: [{key: 'Zikrija'}, {key: 'Hana'}],
      tip: '',
      brojMjesta: '',
      brojKljuceva: '',
      oprema: [{key: 'Zikrija'}, {key: 'Hana'}, {key: 'Cogo'}, {key: 'Irfan'}],
      odgovorniNastavnik: '',
      pristupLaboratoriji: '',
      status: ''
    }
    this.getClassroom = this.getClassroom.bind(this);
    this.deleteClassroom = this.deleteClassroom.bind(this);
  }
  componentDidMount(){
    this.getClassroom();
  }
  deleteClassroom(){
    return apiHelper('/classroom/delete', 'POST', {
      classroom: {
        id: this.state.id
      }
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.props.navigation.navigate("ClassroomOverview",{ reload: true });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  getClassroom(){
    return apiHelper('/classroom/getClassroom' + '?id='+ this.state.id , 'GET', {})
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          naziv: responseJson.name,
          tip: responseJson.type,
          brojMjesta: responseJson.number_of_seats,
          brojKljuceva: responseJson.number_of_keys,
          oprema: responseJson.equipment,
          status: false
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    return(
      <ScrollView style={styles.view}>
        <Text style={styles.tekst}>Naziv sale: {this.state.naziv}</Text>
        <Text style={styles.tekst}>Tip sale: {this.state.tip}</Text>
        <Text style={styles.tekst}>Broj mjesta: {this.state.brojMjesta}</Text>
        <Text style={styles.tekst}>Broj dostupnih ključeva: {this.state.brojKljuceva}</Text>
        <View style={styles.lista}>
          <Text style={{fontSize: 20, paddingTop: 5, paddingLeft: 10, color: '#03A9F4'}}>Dostupna oprema: </Text>
          <FlatList
            data={this.state.oprema}
            renderItem={({item}) => <Text style={{paddingLeft: 20, marginTop: 3, fontSize: 18, color: '#03A9F4'}}>{item.key}</Text>}
          />
        </View>
        <Text style={styles.tekst}>Odgovorni nastavnik: </Text>
        <View style={styles.lista}>
          <Text style={{fontSize: 20, paddingTop: 5, paddingLeft: 10, color: '#03A9F4'}}>Dozvoljen pristup laboratoriji: </Text>
          <FlatList
            data={this.state.pristupLaboratoriji}
            renderItem={({item}) => <Text style={{paddingLeft: 20, marginTop: 3, fontSize: 18, color: '#03A9F4'}}>{item.key}</Text>}
          />
        </View>
        <Text style={styles.tekst}>Status: {this.state.status}</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.buttoni}>
            <Button
              onPress={() => "dummyFunction"}
              title="Uredi"
              color="#03A9F4"
            />
          </View>
          <View style={styles.buttoni}>
            <Button
              style={styles.buttoni}
              onPress={this.deleteClassroom}
              title="Obrisi"
              color="#03A9F4"
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
