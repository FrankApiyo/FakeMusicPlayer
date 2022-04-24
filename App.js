import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';

const heartIcon = require('./images/heart.png');

const stylesheet = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#555',
    height: '100%',
  },
  button: {
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    width: 180,
    height: 180,
    tintColor: '#ffffff',
  },
  liked: {
    tintColor: '#e74c3c',
  },
  text: {
    marginTop: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default class App extends Component {
  state = {
    liked: false,
  };

  handleButtonPressed = () => {
    this.setState({
      liked: !this.state.liked,
    });
  };

  render = () => {
    const likedStyles = this.state.liked ? stylesheet.liked : undefined;
    return (
      <View style={stylesheet.container}>
        <TouchableHighlight
          onPress={this.handleButtonPressed}
          styles={stylesheet.button}
          underlayColor="#555">
          <Image source={heartIcon} style={[stylesheet.icon, likedStyles]} />
        </TouchableHighlight>
        <Text style={stylesheet.text}>Do you like this app?</Text>
      </View>
    );
  };
}
