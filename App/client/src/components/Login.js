// Login screen
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Card, Button, FormLabel, FormInput } from 'react-native-elements'
import { onSignIn } from '../auth.js'
import User from '../models/User.js';

export default class Login extends React.Component{
    constructor(props){
      super(props);

      this.onChange = this.onChange.bind(this);
    }
    state = {
      email: "",
      password: ""
    }
    onChange = (field) => {
      return (text) => {
        this.setState({
          [field]: text
        });
      }
    }

render() {
    return (
        <View style={{ paddingVertical: 20 }}>
            <Card title='SIGN IN'>
                <FormLabel>Email</FormLabel>
                <FormInput placeholder="Email address..."
                           value={this.state.email}
                           onChangeText={this.onChange("email")}
                           />
                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry placeholder="Password..."
                           value={this.state.password}
                           onChangeText={this.onChange("password")}
                           />
                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="Sign in"
                    onPress={() => {
                      User.login(this.state.email, this.state.password).then((responseJson) =>{
                          console.log(responseJson);
                          if(responseJson.responseCode == 200)
                            onSignIn(responseJson.token).then(() => this.props.navigation.navigate("SignedIn"));

                        })
                    }}
                />
            </Card>
        </View>
    )
  }
}
