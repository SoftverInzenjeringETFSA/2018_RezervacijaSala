import React, { Component } from 'react';
import { Text, View, StyleSheet, Picker } from 'react-native';
import { Constants } from 'expo';



// or any pure javascript modules available in npm
import {
    Card,
    FormLabel,
    CheckBox,
    FormInput,
    List,
    ListItem,
} from 'react-native-elements'; // Version can be specified in package.json

const list = [
    {
        name: 'Item 1',
        avatar_url: '',
        subtitle: 'Subitem 1',
    },
    {
        name: 'Item 2',
        avatar_url: '',
        subtitle: 'Subitem2',
    },
    // more items
];

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
    <View style={styles.header}>

    <Text style={styles.paragraph}>
        Pretraga sala
        </Text>

        </View>

        <View style={styles.body}>

    <Text style={styles.paragraph}>
        Tip sale
        </Text>

        <Picker
        onValueChange={(itemValue, itemIndex) =>
        this.setState({ language: itemValue })}>
    <Picker.Item label="Veliki sala" value="vrsta1" />
            <Picker.Item label="Mala sala" value="vrsta2" />
            <Picker.Item label="Srednja sala" value="vrsta3" />
            </Picker>

            <CheckBox center title="Samo slobodne sale" />
            <FormLabel>
            Broj mjesta
        </FormLabel>
        <FormInput>
        Unesite broj mjesta
        </FormInput>
        <FormLabel>
        Oprema
        </FormLabel>

        <List containerStyle={{ marginBottom: 20 }}>
        {list.map((l, i) => (
            <ListItem
            roundAvatar
            avatar={{ uri: l.avatar_url }}
            key={i}
            title={l.name}
            />
        ))}
    </List>

        </View>

        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    paragraph: {
        margin: 15,
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    header: {
        backgroundColor: 'blue',
        flex: 1,
        padding: 5,
    },
    body: {
        flex: 10,
        fontSize: 19,
    },
});
