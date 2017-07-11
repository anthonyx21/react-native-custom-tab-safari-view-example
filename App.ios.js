import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,WebView } from 'react-native';
import SafariView from "react-native-safari-view";

export default class App extends React.Component {


  constructor(props) {
    super(props);
  }

  _pressHandler() {
    SafariView.isAvailable()
      .then(SafariView.show({
        url: "https://github.com/naoufal"
      }))
      .catch(error => {
        console.log("vvv")
        // Fallback WebView code for iOS 8 and earlier
      });
  }



  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Button onPress={this._pressHandler} title="Open Safari Webview">
          Show Safari View
        </Button>

      </View>
      // <WebView
      //   source={{uri: 'https://github.com/facebook/react-native'}}
      //   style={{marginTop: 20}}
      // />
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
