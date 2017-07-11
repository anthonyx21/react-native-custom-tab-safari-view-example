import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,WebView } from 'react-native';
// import SafariView from "react-native-safari-view";
import {CustomTabs} from "react-native-custom-tabs";

export default class App extends React.Component {


  constructor(props) {
    super(props);
  }

  _pressHandler() {
    CustomTabs.openURL('https://www.google.com').then((launched) => {
      console.log(`Launched custom tabs: ${launched}`);
    }).catch(err => {
      console.error(err)
    });
  }



  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Button onPress={this._pressHandler} title="Open Chrome Custom Tab">
          Show Custom Tab View
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
