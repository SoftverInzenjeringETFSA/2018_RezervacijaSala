// Login screen
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { onSignIn } from '../auth.js'
import User from '../models/User.js';
import Validation from '../validation.js';

export default class Login extends React.Component{
  constructor(props){
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  state = {
    email: {
      value: "",
      error: ""
    },
    password: {
      value: "",
      error: ""
    }
  }
  onChange = (field) => {
    return (text) => {
      this.setState({
        [field]: {
          value: text,
          error: ""
        }
      });
    }
  }

  onSubmit(){
    var validForm = true;

    /*  Email validation  */
    if(Validation.validateEmail(this.state.email.value) === false){
      this.setState({
        email: {
          value: this.state.email.value,
          error: "Please enter a valid email adress."
        }
      });
      validForm = false;
    }

    /*  Password validation  */
    if(Validation.validatePassword(this.state.password.value) === false){
      this.setState({
        password: {
          value: this.state.password.value,
          error: "The password must be between 6 and 15 characters long and contain atleast one uppercase, one lowercase and one digit."
        }
      });
      validForm = false;
    }

    if(validForm == false)
      return;

    User.login(this.state.email.value, this.state.password.value).then((responseJson) => {
        console.log(responseJson);
        if(responseJson.responseCode == 200)
          onSignIn(responseJson.token).then(() => this.props.navigation.navigate("SignedIn"));
      })
  }


  render() {
    return (
        <View style={{ paddingVertical: 20 }}>
            <Card title='SIGN IN'>
                <FormLabel>Email</FormLabel>
                <FormInput placeholder="Email address..."
                           value={this.state.email.value}
                           onChangeText={this.onChange("email")}
                           inputStyle={styles.textInput}
                           />
                <FormValidationMessage>{this.state.email.error}</FormValidationMessage>
                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry placeholder="Password..."
                           value={this.state.password.value}
                           onChangeText={this.onChange("password")}
                           inputStyle={styles.textInput}
                           />
                <FormValidationMessage>{this.state.password.error}</FormValidationMessage>
                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="Sign in"
                    onPress={() => { this.onSubmit() }}
                />
            </Card>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  textInput:{
    paddingLeft: 10
  }
});
