import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import styles from './styles/LoadingScreen';

const LoadingScreen = () => (
  <View sytles={styles.root}>
    <ActivityIndicator size="large" />
  </View>
);

export default LoadingScreen;
