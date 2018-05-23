import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import { IP_V4 } from 'react-native-dotenv'

export default class App extends React.Component {
  /*requestToNode = () => {
    console.log('requestToNode gets called')
    axios.post(`http://${IP_V4}:5000/api/reservation/cancel`, {
      userId: '1',
      reservationId: '1'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }*/
  
  render() {
    return (
      /*<View style={styles.container}>
      <Button
        onPress={this.requestToNode}
        title="Send request"
      />
      </View>*/
      <View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
