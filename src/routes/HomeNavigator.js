import React from 'react';
import { TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import { TabNavigator } from 'react-navigation';
import { HomeScreen, NotificationsScreen, ProfileScreen } from '../screens';
import Colors from '../../constants/Colors';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: Colors.$redColor,
        },
        headerRight: (
          <TouchableOpacity onPress={() => navigation.navigate('CreateMeetup')}>
            <MaterialIcons name="add-circle" size={30} color="white" />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={25} color={tintColor} />
        ),
      }),
    },
    Notifications: {
      screen: NotificationsScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Colors.$redColor,
        },
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="notifications" size={25} color={tintColor} />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        headerStyle: {
          backgroundColor: Colors.$redColor,
        },
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="account-circle" size={25} color={tintColor} />
        ),
      },
    },
  },
  {
    swipeEnabled: true,
    lazy: false,
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
