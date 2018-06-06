import React, { Component, PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './style.js';
export default class ClassroomItem extends PureComponent {

  _onPress = () => {
    this.props.onPressItem(this.props.classroom.getId());
  };

  render(){
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.containter}>
          <Text style={styles.title}> {this.props.classroom.getName()} </Text>
          <View style={styles.body}>
            <Text>{"Type: " +this.props.classroom.getType()}</Text>
            <Text>{"Number of Seats: " + this.props.classroom.getNumberOfSeats()}</Text>
            <Text>{"Equipment: " + this.props.classroom.getEquipment()}</Text>
            <Text>{"Number of Keys: " + this.props.classroom.getNumberOfKeys()}</Text>
          </View>
        </View>
      </TouchableOpacity>

    )
  }
}
