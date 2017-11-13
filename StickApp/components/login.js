import React, { Component } from 'react';
import firebase from 'firebase';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component{

  state = { email: '', password: '', error: '', loading: false };

  buttonPressed() {
    const { email, password } = this.state;
    this.setState({error: '', loading: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.loginSucess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.loginSucess.bind(this))
          .catch(this.loginFailed.bind(this));
      });
  }

  loginFailed() {
    this.setState({
      error: 'Authentication failed',
      loading: false
    })
    this.renderButton()
  }

  loginSucess() {
      this.setState({
        email: '',
        password: '',
        error: '',
        loading: false
      });
      Actions.main();
  }

  renderButton() {
    if(this.state.loading) {
      return(
        <ActivityIndicator
        animating={this.state.loading}
        size='large'
      />
      )
    }

    return(
      <TouchableHighlight style={styles.button} onPress={this.buttonPressed.bind(this)}>
        <Text>
          logga in
        </Text>
      </TouchableHighlight>
    )
  }

  render() {
    return(
      <View>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          onChangeText={ (text) => this.setState({email: text})}
          value={this.state.email}
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

        <Text style={{color: 'red'}}>{this.state.error}</Text>
        {this.renderButton()}

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
