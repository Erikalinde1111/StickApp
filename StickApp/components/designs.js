import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

const Designs = () => {

  data=[
      {key: 1, title: 'kortärmad', body: '1.0', avatar_url: (require('../pic/banan-.jpg'))},
      {key: 2, title: 'halvlång', body: '0.5', avatar_url: (require('../pic/banan-.jpg'))},
      {key: 3, title: 'helång', body: '0.25', avatar_url: (require('../pic/banan-.jpg'))}
  ];



  return(
    <View>
      <Text>Välj typ av design du vill sticka mer</Text>
        <List>
            <FlatList
              data={this.data}
              renderItem={({item}) => (
                <ListItem
                  containerStyle={{margin: 30, backgroundColor: 'pink', padding: 10}}
                  avatarStyle={{ width: 50, height: 50}}
                  onPress={() => console.log(item.body)}
                  title={item.title}
                  avatar={item.avatar_url}
                />
              )}
            />
        </List>
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
