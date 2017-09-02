import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import styled from 'styled-components/native'
import {Button} from './components/button/index.js'
console.log(Button);
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Button>Holo</Button>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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
