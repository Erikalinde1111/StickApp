/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import firebase from 'firebase';
import Login from './components/login';

export default class App extends Component{

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyD-KygG67cI5h8JXhcTgMq0bsFQABnRZO0',
        authDomain: 'stick-app-31320.firebaseapp.com',
        databaseURL: 'https://stick-app-31320.firebaseio.com',
        projectId: 'stick-app-31320',
        storageBucket: 'stick-app-31320.appspot.com',
        messagingSenderId: '450275542614'
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Login />
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
  }
});
