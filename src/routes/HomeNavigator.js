import { TabNavigator } from 'react-navigation';
import { HomeScreen, NotificationsScreen, ProfileScreen } from '../screens';
import Colors from '../../constants/Colors';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Notifications: {
      screen: NotificationsScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      inactiveTintColor: Colors.$blackBlueColor,
      activeTintColor: Colors.$redColor,
      style: {
        backgroundColor: Colors.$whiteColor,
      },
    },
  },
);
