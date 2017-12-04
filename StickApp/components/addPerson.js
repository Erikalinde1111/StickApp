import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

class addPerson extends Component {

  state = {key: '', hip: '', lengthToArmpit: '', axlar: '', armlength: '', totalLength: ''};

  calcPattern() {
    var nrOfStitches = (25 * this.state.hip) / 10;
    var lengthOfUpperFront = this.state.totalLength - this.state.lengthToArmpit;
    Actions.showPattern({stitches: (nrOfStitches), lengthToArmpit: (this.state.lengthToArmpit), lengthOfUpperFront: (lengthOfUpperFront)});
  }

  saveData() {
    const { currentUser } = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/persons`)
      .push({key: this.state.key, hip: this.state.hip, lengthToArmpit: this.state.lengthToArmpit, axlar: this.state.axlar, armlength: this.state.armlength, totalLength: this.state.totalLength})
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          style={styles.inputStyle}
          onChangeText={(key) => this.setState({key})}
          value={this.state.key}
          placeholder="Förnamn"
        />
        <TextInput
          autoCorrect={false}
          style={styles.inputStyle}
          onChangeText={(hip) => this.setState({hip})}
          value={this.state.hip}
          placeholder="höft cm"
        />
        <TextInput
          autoCorrect={false}
          style={styles.inputStyle}
          onChangeText={(lengthToArmpit) => this.setState({lengthToArmpit})}
          value={this.state.lengthToArmpit}
          placeholder="längd från höft till armhåla"
        />
        <TextInput
          autoCorrect={false}
          style={styles.inputStyle}
          onChangeText={(axlar) => this.setState({axlar})}
          value={this.state.axlar}
          placeholder="axlar cm"
        />
        <TextInput
          autoCorrect={false}
          style={styles.inputStyle}
          onChangeText={(armlength) => this.setState({armlength})}
          value={this.state.armlength}
          placeholder="ärmlängd cm"
        />
        <TextInput
          autoCorrect={false}
          style={styles.inputStyle}
          onChangeText={(totalLength) => this.setState({totalLength})}
          value={this.state.totalLength}
          placeholder="total längd från höft till axlar"
        />
        <TouchableHighlight style={styles.button} onPress={this.saveData.bind(this)}>
          <Text>
            Lägg till person
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#99FFFF',
  },
  inputStyle: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 5,
    margin: 10,
  }
};

export default addPerson;
