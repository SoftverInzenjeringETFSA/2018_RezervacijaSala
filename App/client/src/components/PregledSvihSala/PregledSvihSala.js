import React from 'react'
import { ScrollView, Text, View, TextInput, Header, Button } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { H1, Footer, FooterTab } from 'native-base';


import api from '../../utils/apiHelper.js'
import styles from './style.js';



export default class PregledSvihSala extends React.Component{
    constructor(props){
      super(props);

      this.state = {
        checked: false,
        data: [{key: 'Zikrija'}, {key: 'Hana'}, {key: 'Zikrija'}, {key: 'Hana'}, {key: 'Zikrija'}, {key: 'Hana'}, {key: 'Zikrija'}, {key: 'Hana'}],
        naziv: '1-14',
        tip: '',
        brojMjesta: '',
        brojKljuceva: '',
        oprema: [{key: 'Zikrija'}, {key: 'Hana'}, {key: 'Zikrija'}, {key: 'Hana'}],
        odgovorniNastavnik: '',
        pristupLaboratoriji: '',
        status: ''
    }
}

allClassrooms(){

  return apiHelper('api/classroom/getAllClassroom', 'GET', {}) // + '?id=${encodeURIComponent(' + {id} + ')} // ovaj dio sluzi za trazenje po id-u
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
          }).catch((error) =>{
                console.error(error);
              });
}

render() {
    return (
        <View style={styles.MainContainer}>
          <View style={{margin: 10}}>
            <Button title="Poziv funkcije" onPress={() => this.allClassrooms()} />
          </View>
        </View>

    );
  }
}
