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
    animationEnabled: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveTintColor: Colors.$blackBlueColor,
      activeTintColor: Colors.$redColor,
      pressColor: Colors.$redColor,
      indicatorStyle: { backgroundColor: Colors.$redColor },
      style: {
        backgroundColor: Colors.$whiteColor,
      },
    },
  },
);
