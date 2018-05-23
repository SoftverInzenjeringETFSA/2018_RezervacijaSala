// Login screen 
import React from 'react'
import { Text, View } from 'react-native'
import { Card, Button, FormLabel, FormInput } from 'react-native-elements'
import { onSignIn } from '../auth.js'

export default ({ navigation }) => {
    return (
        <View style={{ paddingVertical: 20 }}>
            <Card title='SIGN IN'>
                <FormLabel>Email</FormLabel>
                <FormInput placeholder="Email address..." />
                <FormLabel>Password</FormLabel>
                <FormInput secureTextEntry placeholder="Password..." />
                <Button
                    buttonStyle={{ marginTop: 20 }}
                    backgroundColor="#03A9F4"
                    title="Sign in"
                    onPress={() => {
                        onSignIn().then(() => navigation.navigate("SignedIn"));
                    }}
                />
            </Card>
        </View>
    )
}