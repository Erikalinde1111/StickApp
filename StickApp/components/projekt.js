import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export default class Projekt extends Component{
  render() {
    return (
      <View>
        <Text>Lista på alla min projekt</Text>
        <TouchableHighlight onPress={this.buttonPressed.bind(this)}>
          <Text>
            log out
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  //gör en funktion som loggar ut usern och som router till Actions.auth()
  buttonPressed() {
    firebase.auth().signOut().then( () => Actions.auth());
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#99FFFF',
  }
});
