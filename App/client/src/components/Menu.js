// Screen with a list of functionalities
import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

export default () => {
    <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
            <Button
                backgroundColor="#03A9F4"
                title="View now"
                onPress={() => "dummyFunction"}
            />
        </ScrollView>
    </View>
}
