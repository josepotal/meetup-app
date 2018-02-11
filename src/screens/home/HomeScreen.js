import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

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
  static navigationOptions = ({ navigation }) => {
    return {
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
    };
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
