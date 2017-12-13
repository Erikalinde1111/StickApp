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
     {key: 1, title: 'KORTÄRMAD', body: '1.0', url: (require('../pic/kortarmad2.png'))},
     {key: 2, title: 'HALVLÅNG', body: '0.5', url: (require('../pic/halvlang.png'))},
     {key: 3, title: 'HELLÅNG', body: '0.25', url: (require('../pic/langarmad.png'))}
 ];


  onPressed(designType) {
   patternType(designType);
   goToPattern()
  };

  render() {
    return(
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around' }}>
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
    justifyContent: 'space-between',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    margin: 10,
    padding: 20
  },
  text: {
    alignSelf: 'flex-end',
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  image: {
    height: 80,
    width: 120
  }
});



export default Designs;
