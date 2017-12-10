import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


//visa en bild på framstycket som ritning och visa mått och maskantal på ritningen
//markera pilen på ritningen där användaren befinner sig just nu med färg eller liknande
const ShowPattern = (props) => {
  return(
    <View style={styles.container}>
      <Text>Skall visa uträknade maskor här apa!! {props.stitches}</Text>
      <Image source={require('../pic/framstycke2.png')} style={{width: 350, alignSelf: 'flex-start'}}/>
      <Text>{console.log(props.stitches)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#99FFFF'
  }
});


export default ShowPattern;
