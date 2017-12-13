import _ from 'lodash';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
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

  onPressed(person) {
    choosePerson(person)
    Actions.designs();
  }

  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.header}>VÄLJ PERSON I LISTAN</Text>
          <FlatList
            style={styles.list}
            data={this.state.personer}
            renderItem={({item}) => <Text style={styles.text} onPress={() => this.onPressed(item)}>{item.key}</Text>}
          />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#E8E8E8',
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    padding: 10,
    margin: 10
  },
  text: {
    fontSize: 20
  },
  header: {
    fontSize: 30,
    margin: 10
  }
});
