import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import axios from 'axios';
import { IP_V4 } from 'react-native-dotenv'

import { SignedOut, SignedIn, createRootNavigator } from './src/router'

import { isSignedIn } from './src/auth'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      signedIn: false,
      checkedSignIn: true
    }
  }

  componentDidMount() {
    console.log('component mount...')
    isSignedIn()
      .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
      .catch(err => alert("An error occurred"));
  }
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
    /*return (
      <View style={styles.container}>
      <Button
        onPress={this.requestToNode}
        title="Send request"
      />
      </View>
    );*/
      const { checkedSignIn, signedIn } = this.state

      // Don't render anything if we didn't check sign in status
      if(!checkedSignIn)
        return null;
      
      const Layout = createRootNavigator(signedIn)
      return <Layout />
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