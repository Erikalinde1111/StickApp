import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  Button,
  TouchableHighlight
} from 'react-native';
import { Icon } from 'react-native-elements';

//<Icon style={{fontSize: 80, zIndex: 100, backgroundColor: "transparent"}} onPress={() => Alert.alert("hej")} name="chevron-right" />
//visa en bild på framstycket som ritning och visa mått och maskantal på ritningen
//markera pilen på ritningen där användaren befinner sig just nu med färg eller liknande
const ShowPattern = (props) => {
  return(
    <View style={styles.container}>
      <Button
        onPress={() => Alert.alert(props.steg4)}
        title="Steg 4"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Image source={require('../pic/framstycke2.png')} style={{width: 350, zIndex: -1, position: 'absolute'}}/>
      <Button
        onPress={() => Alert.alert(props.steg3)}
        title="Steg 3"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => Alert.alert(props.steg2)}
        title="Steg 2"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => Alert.alert(props.steg1)}
        title="Steg 1"
        color="#841584"
        backgroundColor='#DDDDDD'
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    alignItems: 'flex-end'
  }
});


export default ShowPattern;
