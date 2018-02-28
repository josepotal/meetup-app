import { AppLoading } from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import EStyleSheet from 'react-native-extended-stylesheet';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/redux/store';

import Colors from './constants/Colors';

import Root from './src/Root';

EStyleSheet.build(Colors);

export default class App extends React.Component {
  state = {
    ready: false,
  };

  render() {
    // if (!this.state.ready) {
    //   return <AppLoading />;
    // }
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Root />
        </PersistGate>
      </Provider>
    );
  }
}
