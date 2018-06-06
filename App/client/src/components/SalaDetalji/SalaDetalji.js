import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, FlatList } from 'react-native';
import styles from './style.js'
import apiHelper from '../../utils/apiHelper.js';

export default class SalaDetalji extends Component{
  constructor(props) {
    super(props)

    this.state = {
      checked: false,
      naziv: 'Lab 1-14',
      tip: 'Mala',
      brojMjesta: '12',
      brojKljuceva: '2',
      oprema: [{key: 'Kompjuter'}, {key: 'Projektor'}, {key: 'Prozor'}, {key: 'Ruter'}],
      odgovorniNastavnik: 'Edin Dzeko',
      pristupLaboratoriji: [{key: 'Zikrija'}, {key: 'Hana'}, {key: 'Cogo'}, {key: 'Irfan'}],
      status: 'Funkcionalna'
    }
    this.getClassroom = this.getClassroom.bind(this);
  }
  componentDidMount(){
    this.getClassroom();
  }
  deleteClassroom(){
    var id = "5b17271e66bf63b8665c766a";
    return apiHelper('/classroom/delete' + '?id='+ id, 'GET', {})
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  getClassroom(){
    var id = "5b17271e66bf63b8665c766a";
    return apiHelper('/classroom/getClassroom' + '?id='+ id , 'GET', {})
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          naziv: responseJson.name,
          tip: responseJson.type,
          brojMjesta: responseJson.number_of_seats,
          brojKljuceva: responseJson.number_of_keys,
          oprema: responseJson.equipment,
          odgovorniNastavnik: responseJson.odgovorniNastavnik,
          pristupLaboratoriji: responseJson.pristupLaboratoriji,
          status: responseJson.status
        }, function(){});
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
