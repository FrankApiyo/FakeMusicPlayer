import React from 'react';
import {Text, StyleSheet, View, Image, ImageBackground} from 'react-native';

const playIcon = require('./Images/play.png');
const volumeIcon = require('./Images/sound.png');
const hdIcon = require('./Images/hd-sign.png');
const fullScreenIcon = require('./Images/full-screen.png');
const flower = require('./Images/flower.jpg');
const remoteImage = {
  uri: 'https://farm5.staticflickr.com/4702/24825836327_bb2e0fc39b_b.jpg',
};

const styles = StyleSheet.create({
  flower: {
    flex: 1,
  },
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    padding: 0,
  },
  videoContainer: {
    backgroundColor: '#000',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginLeft: 0,
    width: '100%',
  },
  controlsContainer: {
    padding: 10,
    backgroundColor: '#202020',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 300,
    width: '100%',
    flex: 1,
    borderWidth: 2,
    display: 'flex',
  },
  icon: {
    tintColor: 'powderblue',
    height: 16,
    width: 16,
    marginRight: 5,
    flex: 1,
    flexGrow: 0.5,
    borderWidth: 2,
    marginLeft: 5,
  },
  progress: {
    backgroundColor: '#000',
    borderRadius: 7,
    flex: 15,
    flexBasis: 10,
    display: 'flex',
    borderWidth: 2,
  },
  progressBar: {
    backgroundColor: '#bf161c',
    borderRadius: 5,
    height: 10,
    margin: 2,
    paddingTop: 3,
    width: '50%',
    borderWidth: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.appContainer}>
        <ImageBackground
          source={remoteImage}
          style={styles.videoContainer}
          resizeMode="contain">
          <View style={styles.controlsContainer}>
            <Image source={volumeIcon} style={styles.icon} />
            <View style={styles.progress}>
              <View style={styles.progressBar} />
            </View>
            <Image source={hdIcon} style={styles.icon} />
            <Image source={fullScreenIcon} style={styles.icon} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}
