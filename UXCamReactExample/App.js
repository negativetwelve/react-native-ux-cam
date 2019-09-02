/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button} from 'react-native';
import RNUxcam from 'react-native-ux-cam';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native only!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Button onPress={this._handlePress} title="UXCam" />
         
        <Text ref={(label) => { RNUxcam.occludeSensitiveView(label); }} style={styles.label} > {this.strings(23)} </Text>
        <Button ref={ x => {RNUxcam.occludeSensitiveView(x);}}title="Press Me" onPress={this._handlePress} />
        <Button ref={ x => {RNUxcam.occludeSensitiveViewWithoutGesture(x);}}title="Hiding Gestures" onPress={this._handlePress} />
        
      </View>
    );
  }
  componentDidMount(){
    // RNUxcam.useSchematicCapture(false);
    RNUxcam.startWithKey('UXCAM_APP_KEY');
    RNUxcam.optIntoSchematicRecordings();
    // RNUxcam.setUserIdentity('USER_IDENTITY');
    // RNUxcam.logEvent("LOGGING_EVENT");
    // RNUxcam.addVerificationListener(myPromise);
    
    // var myPromise = new Promise(function(resolve,reject){
    //   if(resolve){
    //     RNUxcam.tagScreenName('Promiser');
    //   }
    // });

  }

  

  strings(value){
    return value;
  }
  _handlePress(event) {
    
    RNUxcam.occludeSensitiveScreen(true,true);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
