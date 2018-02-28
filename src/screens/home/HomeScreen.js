import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

// import { LoadingScreen } from '../../commons';

import MyMeetupsList from './components/MyMeetupsList';
import styles from './styles/HomeScreen';

import { fetchMyMeetups } from './actions';

/* using decorators instead of mapstate and mapdispatch */
@connect(
  state => ({
    myMeetups: state.home.myMeetups,
  }),
  { fetchMyMeetups },
)
class HomeScreen extends Component {
  componentDidMount() {
    this.props.fetchMyMeetups();
  }

  render() {
    const { myMeetups: { isFetched, data, error } } = this.props;
    if (!isFetched) {
      console.log('fetching');
    } else if (error.on) {
      console.log(error.message);
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MyMeetupsList meetups={data} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
