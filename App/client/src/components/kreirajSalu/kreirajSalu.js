import React, { Component } from 'react';
import { ScrollView, Text, View, TextInput, Header } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { H1, Button, Footer, FooterTab } from 'native-base';

import styles from './style.js';
import apiHelper from '../../utils/apiHelper.js';
import Validation from '../../validation.js';

export default class kreirajSalu extends Component {

constructor(props) {
  super(props);
  this.state = {
   naziv: '',
   tip: '',
   broj_mjesta: '',
   oprema: '',
   broj_kljuceva: '',
   naziv_error: '',
   tip_error: '',
   broj_mjesta_error: '',
   oprema_error: '',
   broj_kljuceva_error: ''
  };
  this.onChange = this.onChange.bind(this);
}

kreirajSaluFunc(event){

  var validForm = true;

  let naziv = this.state.naziv;
  let tip = this.state.tip;
  let broj_mjesta = this.state.broj_mjesta;
  let oprema = this.state.oprema;
  let broj_kljuceva = this.state.broj_kljuceva;

  let classroom = {
    name: naziv,
    type: tip,
    number_of_seats : broj_mjesta,
    equipment : oprema,
    number_of_keys : broj_kljuceva,
  };
<<<<<<< HEAD
=======

  /* Name Validation */
  if(Validation.validateClassroomName(classroom.name) === false){
      this.setState({naziv_error: "Please enter a valid name." });
      validForm = false;
  }
  /* Type Validation */
  if(Validation.validateClassroomType(classroom.type) === false){
      this.setState({tip_error: "Please enter a valid type." });
      validForm = false;
  }
  /* Number of seats Validation */
  if(Validation.validateClassroomNumberOfSeats(classroom.number_of_seats) === false){
      this.setState({broj_mjesta_error: "Number of seats has to be in range from 10 to 50!" });
      validForm = false;
  }
  /* Equipment Validation */
  if(Validation.validateClassroomEquipment(classroom.equipment) === false){
      this.setState({oprema_error: "Please enter a valid equipment." });
      validForm = false;
  }
  /* Number of keys Validation */
  if(Validation.validateClassroomNumberOfKeys(classroom.number_of_keys) === false){
      this.setState({broj_kljuceva_error: "Number of keys has to be in range from 1 to 3!" });
      validForm = false;
  }

  if(validForm == false){
    return;
  }
>>>>>>> 11963ba5c2fea6170dd1af9fecc97c97d443022f
  console.log(classroom);
  return apiHelper('/classroom/create', "POST", {
    classroom
  }).then(response => response.json())
  .then(responseJson => {
    console.log(responseJson);
    console.log("Uspjesno kreirano.");
<<<<<<< HEAD

=======
    this.setState({
     naziv: '',
     tip: '',
     broj_mjesta: '',
     oprema: '',
     broj_kljuceva: '',
     naziv_error: '',
     tip_error: '',
     broj_mjesta_error: '',
     oprema_error: '',
     broj_kljuceva_error: ''
    })
>>>>>>> 11963ba5c2fea6170dd1af9fecc97c97d443022f
  }).catch((error) => {
    console.log("Greska");
  })
}

onChange = (name, value) => this.setState({ [name]: value });

render() {
  let { naziv, tip, broj_mjesta, oprema, broj_kljuceva } = this.state;

  return (
    <View  style={{flex: 12}}>
    <View style={{ marginLeft:5, flex: 11}}>
    <TextField
       label='Naziv'
       value={naziv}
       onChangeText={ (naziv) => this.setState({ naziv }) }
       error={this.state.naziv_error}
     />
     <TextField
        label='Tip'
        value={tip}
        onChangeText={ (tip) => this.setState({ tip }) }
        error={this.state.tip_error}
      />
      <TextField
         label='Broj mjesta'
         value={broj_mjesta}
         onChangeText={ (broj_mjesta) => this.setState({ broj_mjesta }) }
         error={this.state.broj_mjesta_error}
       />
       <TextField
          label='Oprema'
          value={oprema}
          onChangeText={ (oprema) => this.setState({ oprema }) }
          error={this.state.oprema_error}
        />
        <TextField
           label='Broj kljuceva'
           value={broj_kljuceva}
           onChangeText={ (broj_kljuceva) => this.setState({ broj_kljuceva }) }
           error={this.state.broj_kljuceva_error}
         />
          </View>
          <View style={{flex: 1}}>
          <Button full info onPress = { this.kreirajSaluFunc.bind(this) }>
            <Text style={{color : 'white', fontWeight: 'bold', fontSize: 20}}>Kreiraj</Text>
          </Button>
          </View>
    </View>
  );
}
}
