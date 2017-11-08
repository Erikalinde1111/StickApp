/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputStyle}
          placeholder="användarnamn"
        />
        <TextInput
          style={styles.inputStyle}
          placeholder="lösenord"
        />
        <TouchableHighlight style={styles.button}>
          <Text>
            logga in
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#99FFFF',
  },
  inputStyle: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  }
});
