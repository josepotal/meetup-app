import React, { Component } from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import { LoginScreen } from '../screens';
import Navigator from './Navigator';

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
export const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);
const addListener = createReduxBoundAddListener('root');

@connect(state => ({
  navigation: state.navigation,
  user: state.user,
}))
export default class AppNavigator extends Component {
  state = {};

  render() {
    console.log(this.props.state);
    const navigation = addNavigationHelpers({
      dispatch: this.props.dispatch,
      state: this.props.navigation,
      addListener,
    });

    if (this.props.user.isLogged) {
      return <Navigator navigation={navigation} />;
    }
    return <LoginScreen />;
  }
}

export const router = Navigator.router;
