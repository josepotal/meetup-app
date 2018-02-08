import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesome } from '@expo/vector-icons';

// import { LoadingScreen } from '../../commons';

import MyMeetupsList from './components/MyMeetupsList';
import Colors from '../../../constants/Colors';
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
  static navigationOptions = {
    headerStyle: {
      backgroundColor: Colors.$redColor,
    },
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="home" size={25} color={tintColor} />
    ),
  };

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

// const mapStateToProps = state => ({
//   myMeetups: state.home.myMeetups,
// });

// const mapDispatchToProps = dispatch => ({
//   fetchMyMeetups: bindActionCreators(fetchMyMeetups, dispatch),
// });

export default HomeScreen;
