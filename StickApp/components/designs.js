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

import { goToPattern, patternType } from '../helpers/helper';
import { Actions } from 'react-native-router-flux';

class Designs extends React.Component {

  constructor(props){
    super(props);
    this.onPressed=this.onPressed.bind(this);
  }

  data=[
     {key: 1, title: 'kortärmad', body: '1.0', url: (require('../pic/banan-.jpg'))},
     {key: 2, title: 'halvlång', body: '0.5', url: (require('../pic/banan-.jpg'))},
     {key: 3, title: 'helång', body: '0.25', url: (require('../pic/banan-.jpg'))}
 ];


  onPressed(designType) {
   patternType(designType);
   goToPattern()
  };

  render() {
    return(
      <View style={{flex: 1, backgroundColor: 'pink', flexDirection: 'column', justifyContent: 'space-around' }}>
        {this.data.map((designType) => {
          return (
            <View key={designType.key} style={styles.container}>
              <Image source={designType.url} style={styles.image} />
              <Text style={styles.text}>{designType.title}</Text>
              <Icon
                onPress={() => this.onPressed(designType)}
                name='chevron-right'
                type='octicon'
                size={40}
                color='#00aced' />
            </View>
          );
        })}
    </View>
    );
  }

}

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
