import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import firebase from 'firebase';

//visa en bild på framstycket som ritning och visa mått och maskantal på ritningen
//markera pilen på ritningen där användaren befinner sig just nu med färg eller liknande
const ShowPattern = (props) => {
  return(
    <View style={styles.container}>
      <Text>Skall visa uträknade maskor här apa!!</Text>
    </View>
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


export default ShowPattern;
