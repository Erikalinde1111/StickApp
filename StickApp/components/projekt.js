import _ from 'lodash';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import {choosePerson} from '../helpers/helper';

export default class Projekt extends Component{

  state = {personer: []};

  componentWillMount() {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/persons`)
    .on('value', snapshot => {
      var lista = snapshot.val();
      this.datan(lista);
    });

  }

  datan(data) {
    const personer = _.map(data, (val, uid) => {
      return { ...val, uid };
    });
    this.setState({personer: personer});
    console.log(this.state.personer);
  }

  onPressed(x) {
    choosePerson(x)
    Actions.designs();
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <View style={styles.container}>
          <Text>Vem vill du sticka åt</Text>
          <FlatList
            style={styles.list}
            data={this.state.personer}
            renderItem={({item}) => <Text onPress={() => this.onPressed(item)}>{item.key}</Text>}
          />
        </View>
        <TouchableHighlight style={styles.button} onPress={this.buttonPressed.bind(this)}>
          <Text>
            log out
          </Text>
        </TouchableHighlight>
      </View>
    );
  }

  //gör en funktion som loggar ut usern och som router till Actions.auth()
  buttonPressed() {
    firebase.auth().signOut().then( () => Actions.auth());
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  list: {
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    backgroundColor: '#FFFFFF'
  }
});
