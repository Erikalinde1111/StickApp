import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { patternType } from '../helpers/helper';
import { pattern } from '../helpers/helper';
import { Actions } from 'react-native-router-flux';

const Designs = (props) => {

  data=[
      {key: 1, title: 'kortärmad', body: '1.0', url: (require('../pic/banan-.jpg'))},
      {key: 2, title: 'halvlång', body: '0.5', url: (require('../pic/banan-.jpg'))},
      {key: 3, title: 'helång', body: '0.25', url: (require('../pic/banan-.jpg'))}
  ];

  return(
    <View style={{flex: 1, backgroundColor: 'pink', flexDirection: 'column', justifyContent: 'space-around' }}>
        {this.data.map((designType) => {
          return (
            <View key={designType.key} style={styles.container}>
              <Image source={designType.url} style={styles.image} />
              <Text style={styles.text}>{designType.title}</Text>
              <Icon
                onPress={() => onPressed(designType)}
                name='chevron-right'
                type='octicon'
                size={40}
                color='#00aced' />
            </View>
          );
        })}
    </View>
  );
};

function onPressed(designType) {
  pattern();
  patternType(designType);
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#99FFFF',
    justifyContent: 'space-between',
    margin: 30,
    padding: 30
  },
  text: {
    alignSelf: 'flex-end',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  image: {
    height: 80,
    width: 80
  }
});


export default Designs;
