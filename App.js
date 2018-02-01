import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import Root from './src/Root';

EStyleSheet.build(Colors);

export default class App extends React.Component {
  render() {
    return <Root />;
  }
}
