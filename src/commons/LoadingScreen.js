import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles/LoadingScreen';

const LoadingScreen = ({ color }) => (
  <View sytles={styles.root}>
    <ActivityIndicator size="large" color={color || 'gray'} />
  </View>
);

export default LoadingScreen;
