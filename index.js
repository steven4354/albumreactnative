//import { AppRegistry } from 'react-native';
//import App from './App';

//AppRegistry.registerComponent('albums', () => App);
//^^old original code

//Import a library to help create a Component
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create a Componen
const App = () => {
  return (
    <Header />
  );
};

//Add the Component to the device
AppRegistry.registerComponent('albums', () => App);
