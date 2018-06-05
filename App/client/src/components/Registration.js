// Registration screen
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Card, Button, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { onSignIn } from '../auth.js'
import User from '../models/User.js';
import Validation from '../validation.js';

export default class Registration extends Component {
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
    },
    repassword: {
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
  onSubmit = () => {
    var validForm = true;

    /* Email Validation */
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

    /*  Repassword validation  */
    if(Validation.validateRepassword(this.state.password.value, this.state.repassword.value) === false){
      this.setState({
        repassword:{
         value: this.state.repassword.value,
         error: "The passwords must match."
        }
      });
      validForm = false;
    }
    if(validForm == false)
      return;

    User.registration(this.state.email.value, this.state.password.value).then((responseJson) =>{
      console.log(responseJson);
      if(responseJson.responseCode == 200){
        setUsername(this.state.email.value);
        onSignIn(responseJson.token).then(() => { this.props.navigation.navigate("SignedIn") })
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  render(){
    return (
        <View style={{ paddingVertical: 20 }}>
            <Card title="SIGN UP">
                <FormLabel>Email</FormLabel>
                <FormInput placeholder="Email address..."
                           value={this.state.email.value}
                           onChangeText={this.onChange("email")}
                           inputStyle={styles.textInput}
                           />
                <FormValidationMessage>{this.state.email.error}</FormValidationMessage>
                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry
                           placeholder="Password..."
                           value={this.state.password.value}
                           onChangeText={this.onChange("password")}
                           inputStyle={styles.textInput}
                            />
                <FormValidationMessage>{this.state.password.error}</FormValidationMessage>
                <FormLabel>Confirm Password</FormLabel>
                <FormInput secureTextEntry
                           placeholder="Confirm Password..."
                           value={this.state.repassword.value}
                           onChangeText={this.onChange("repassword")}
                           inputStyle={styles.textInput}
                           />
               <FormValidationMessage>{this.state.repassword.error}</FormValidationMessage>

                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="SIGN UP"
                    onPress={() => this.onSubmit()}
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

const styles = StyleSheet.create({
  textInput:{
    paddingLeft: 10
  }
});
