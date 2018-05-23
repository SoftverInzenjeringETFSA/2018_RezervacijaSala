// Profile screen
import React from 'react'
import { View } from 'react-native'
import { Card, Button, Text } from 'react-native-elements' 
import { onSignOut } from '../auth'

export default () => {
    <View style={{ paddingVertical: 20 }}>
        <Card title="Nedim Muratovic">
            <View
                style={{
                    backgroundColor: "#bcbec1",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    alignSelf: "center",
                    marginBottom: 20
                }}
            >
                <Text style={{ color: "white", fontSize: 28 }}>NM</Text>
            </View>
            <Button
                backgroundColor="#03A9F4"
                title="Sign Out"
                onPress={() => onSignOut()}
            />
        </Card>
    </View>
}