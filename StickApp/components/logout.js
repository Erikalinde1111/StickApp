import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import firebase from 'firebase';

const Logout = () => {
  return(
    <TouchableHighlight onPress={() => firebase.auth().signOut()}>
      <Text>
        logga ut
      </Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#99FFFF',
  }
});


export default Logout;
