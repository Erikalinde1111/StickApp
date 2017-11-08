import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight
} from 'react-native';

class Login extends Component{

  state = { email: '', password: '' };

  render() {
    return(
      <View>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          onChangeText={ (text) => this.setState({email: text})}
          value={this.state.text}
          placeholder="email"
        />
        <TextInput
          autoCorrect={false}
          style={styles.inputStyle}
          onChangeText={ (text) => this.setState({password: text})}
          value={this.state.password}
          secureTextEntry={true}
          placeholder="lösenord"
        />
        <TouchableHighlight style={styles.button}>
          <Text>
            logga in
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}



const styles = StyleSheet.create({
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
});

export default Login;
