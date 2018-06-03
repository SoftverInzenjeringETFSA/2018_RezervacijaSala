import React from 'react'
import { ScrollView, Text, View, TextInput, Header } from 'react-native';
//import { Button } from 'react-native-elements';
import { TextField } from 'react-native-material-textfield';
import { H1, Button, Footer, FooterTab } from 'native-base';

import styles from './style.js';

export default class PregledSvihSala extends React.Component{
    constructor(props){
      super(props);
    }

render() {
    return (
        <View style={{ marginLeft:5, flex: 11}}>
          <Text style={styles.header}> Pregled sala </Text>
        </View>
    );
  }
}
