import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeNavigator from './HomeNavigator';

export default StackNavigator(
  {
    Home: { screen: HomeNavigator },
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
  },
);
