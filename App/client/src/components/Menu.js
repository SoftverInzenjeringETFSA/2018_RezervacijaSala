// Screen with a list of functionalities
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

export default () => {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ paddingVertical: 40 }}>
                <Button
                    backgroundColor="#03A9F4"
                    title="Functionality #1"
                    onPress={() => "dummyFunction"}
                />
            </ScrollView>
        </View>
    )
}
