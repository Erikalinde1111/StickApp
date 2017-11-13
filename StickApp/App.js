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
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import firebase from 'firebase';
import Router from './components/router';

//borde bryta ut denna kod och lägga i egen component

export default class App extends Component{
  render() {
    return (
      <Router />
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
  button: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  }
});
