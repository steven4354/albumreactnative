//import { AppRegistry } from 'react-native';
//import App from './App';

//AppRegistry.registerComponent('albums', () => App);
//^^old original code

//Import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Create a Componen
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

//Add the Component to the device
AppRegistry.registerComponent('albums', () => App);
