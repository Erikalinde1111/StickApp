import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import firebase from 'firebase';


const ShowPattern = (props) => {
  return(
    <View style={styles.container}>
      <Text>Skall visa uträknade maskor här {props.stitches} apa!!</Text>
      <Text>Sticka räta masker runt till arbetet mäter så många cm {props.lengthToArmpit} från höften till armhålan</Text>
      <Text>Fördela maskorna till varsin sticka så att det finns {(props.stitches)/2} på varje sticka</Text>
      <Text>Maskorna på ena stickan blir framstycket och maskorna på andra stickan blir bakstycket</Text>
      <Text>Sticka framstycket med slätstickning till arbetet mäter {props.lengthOfUpperFront} från armhålan till axeln</Text>
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
