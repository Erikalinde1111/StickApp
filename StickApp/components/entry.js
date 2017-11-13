import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import firebase from 'firebase';
import Login from './login';
import Logout from './logout';
import Projekt from './projekt';
import { Actions } from 'react-native-router-flux';

class Entry extends Component{

  state = { loggedIn: null };

  componentWillMount() {

    firebase.initializeApp({
        apiKey: 'AIzaSyD-KygG67cI5h8JXhcTgMq0bsFQABnRZO0',
        authDomain: 'stick-app-31320.firebaseapp.com',
        databaseURL: 'https://stick-app-31320.firebaseio.com',
        projectId: 'stick-app-31320',
        storageBucket: 'stick-app-31320.appspot.com',
        messagingSenderId: '450275542614'
      });
      const auth = firebase.auth();
      auth.onAuthStateChanged((user) => {
        if(user) {
          this.setState({loggedIn: true});
        }else {
          this.setState({loggedIn: false});
        }

      });

  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
      return(
      
      <TouchableHighlight style={styles.button} onPress={() => firebase.auth().signOut()}>
        <Text>
          logga ut
        </Text>
      </TouchableHighlight>
    );
      case false:
        return <Login />;
      default:
        return(<ActivityIndicator
        animating={true}
        size='large'
        />);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderContent()}
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
  button: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  }
});

export default Entry;
