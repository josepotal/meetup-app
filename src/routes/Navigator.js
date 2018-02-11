import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';

import { CreateMeetupScreen } from '../screens';

export default StackNavigator(
  {
    Home: { screen: HomeNavigator },
    CreateMeetup: { screen: CreateMeetupScreen },
  },
  { mode: 'modal' },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
  },
);
