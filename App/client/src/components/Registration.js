// Registration screen
import React, { Component } from 'react'
import { View } from 'react-native'
import { Card, Button, FormLabel, FormInput } from 'react-native-elements'
import { onSignIn } from '../auth.js'
import User from '../models/User.js';

export default class Registration extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  state = {
    email: "",
    password: "",
    repassword: ""
  }
  onChange = (field) => {
    return (text) => {
      this.setState({
        [field]: text
      });
    }
  }

  render(){
    return (
        <View style={{ paddingVertical: 20 }}>
            <Card title="SIGN UP">
                <FormLabel>Email</FormLabel>
                <FormInput placeholder="Email address..."
                           value={this.state.email}
                           onChangeText={this.onChange("email")}
                           />
                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry
                           placeholder="Password..."
                           value={this.state.password}
                           onChangeText={this.onChange("password")}
                            />
                <FormLabel>Confirm Password</FormLabel>
                <FormInput secureTextEntry
                           placeholder="Confirm Password..."
                           value={this.state.repassword}
                           onChangeText={this.onChange("repassword")}
                           />

                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="SIGN UP"
                    onPress={() => {
                      User.registration(this.state.email, this.state.password).then((responseJson) =>{
                        console.log(responseJson);
                        if(responseJson.responseCode == 200){
                          onSignIn(responseJson.token).then(() => { this.props.navigation.navigate("SignedIn") })
                        }
                      }).catch((error) => {
                        console.log(error);
                      });
                    }}
                />
                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="transparent"
                    textStyle={{ color: "#bcbec1" }}
                    title="Sign In"
                    onPress={() => this.props.navigation.navigate("Login")}
                />
            </Card>
        </View>
    )
  }
}
