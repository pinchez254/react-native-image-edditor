import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet
} from "react-native";

import Editor from './src/editor'
class App extends Component {
  render() {
    return (
    <Editor/>

    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});