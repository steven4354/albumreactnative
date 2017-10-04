//Import libraries for making the compoent
import React from 'react';
import { Text } from 'react-native';

//Make the Component
const Header = () => {
  const { textStyle } = styles;

  return <Text style={textStyle}>Albums</Text>;
};

const styles = {
  texStyle: {
    fontSize: 15
  }
};

//export
export default Header;
