import React from 'react';
import { Provider } from 'react-redux';

import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';

import Root from './src/Root';

import store from './src/redux/store';

EStyleSheet.build(Colors);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
