import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  TouchableHighlight
} from 'react-native';

const Designs = () => {
  return(
    <View>
      <Text>Välj typ av design du vill sticka</Text>
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


export default Designs;
