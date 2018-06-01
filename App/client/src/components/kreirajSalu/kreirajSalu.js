import React, { Component } from 'react';
import { ScrollView, Text, View, TextInput, Header } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { H1, Button, Footer, FooterTab } from 'native-base';

import styles from './style.js';
import apiHelper from '../../utils/apiHelper.js';

export default class kreirajSalu extends Component {

constructor(props) {
  super(props);
  this.state = {
   naziv: '',
   tip: '',
   broj_mjesta: '',
   oprema: '',
   broj_kljuceva: ''
  };
}

kreirajSaluFunc(){

  return apiHelper('/api/classroom/create', "POST", {
    classroom:{
      name: this.naziv,
      type: this.tip,
      number_of_seats : this.broj_mjesta,
      equipment : this.oprema,
      number_of_keys : this.broj_kljuceva
    }
  }).then(response => response.json())
}

render() {
  let { naziv, tip, broj_mjesta, oprema, broj_kljuceva } = this.state;

  return (


    <View  style={{flex: 12}}>
      <H1 style={styles.kreirajSaluHeader}>Classroom creation </H1>
    <View style={{ marginLeft:5, flex: 11}}>
    <TextField
       label='Naziv'
       value={naziv}
       onChangeText={ (naziv) => this.setState({ naziv }) }
     />
     <TextField
        label='Tip'
        value={tip}
        onChangeText={ (tip) => this.setState({ tip }) }
      />
      <TextField
         label='Broj mjesta'
         value={broj_mjesta}
         onChangeText={ (broj_mjesta) => this.setState({ broj_mjesta }) }
       />
       <TextField
          label='Oprema'
          value={oprema}
          onChangeText={ (oprema) => this.setState({ oprema }) }
        />
        <TextField
           label='Broj kljuceva'
           value={broj_kljuceva}
           onChangeText={ (broj_kljuceva) => this.setState({ broj_kljuceva }) }
         />
          </View>
          <View style={{flex: 1}}>
          <Button full info onPress = { this.kreirajSaluFunc }>
            <Text style={{color : 'white', fontWeight: 'bold', fontSize: 20}}>Kreiraj</Text>
          </Button>
          </ View>
    </ View>
  );
}
}
