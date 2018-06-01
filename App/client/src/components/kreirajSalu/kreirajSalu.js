import React, { Component } from 'react';
import { ScrollView, Text, View, TextInput, Header } from 'react-native';
//import { Button } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import { H1, Button, Footer, FooterTab } from 'native-base';

import styles from './style.js';

export default class kreirajSalu extends Component {
constructor(props) {
  super(props);
  this.state = {
   naziv: '',
   tip: '',
   broj_mjesta: '',
   oprema: '',
   broj_kljuceva: '',
   odgovorni_nastavnik: '',
   nas_i_demo: ''
  };
}

render() {
  let { naziv, tip, broj_mjesta, oprema, broj_kljuceva, odgovorni_nastavnik, nas_i_demo } = this.state;

  return (


    <View  style={{flex: 12}}>
      <H1 style={styles.kreirajSaluHeader}>Kreiranje sale </H1>
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
          <Button full info>
            <Text>Kreiraj</Text>
          </Button>
          </ View>
    </ View>
  );
}
}
