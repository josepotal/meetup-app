import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

import { MeetupApi } from '../../../constants/api';
import Colors from '../../../constants/Colors';
import styles from './styles/CreateMeetupScreen';

const meetupApi = new MeetupApi();

class CreateMeetupScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Create a new Meetup',
    headerStyle: {
      backgroundColor: Colors.$redColor,
    },
    headerTitleStyle: {
      color: Colors.$whiteColor,
    },
    headerLeft: (
      <TouchableOpacity
        style={styles.iconClose}
        onPress={() => navigation.goBack()}
      >
        <MaterialIcons name="close" size={30} color="white" />
      </TouchableOpacity>
    ),
    tabBarIcon: ({ tintColor }) => (
      <FontAwesome name="home" size={25} color={tintColor} />
    ),
  });

  state = {
    isDateTimePickerVisible: false,
    date: moment(),
    title: '',
    description: '',
  };

  _showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  _handleDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  _handleDatePicked = date => {
    this.setState({ date });
    this._handleDateTimePicker();
  };

  _checkTitle() {
    const { date } = this.state;
    if (date > moment()) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    }
    return 'Pick a meetup date';
  }

  _checkIfButtonSubmitDisabled() {
    const { title, description, date } = this.state;
    if (title.length > 5 && description.length > 10 && date > moment()) {
      return false;
    }
    return true;
  }

  _changeTitle = title => this.setState({ title });

  _changeDescription = description => this.setState({ description });

  _createMeetup = async () => {
    const { title, description, date } = this.state;
    const res = await meetupApi.createGroupMeetups({
      title,
      description,
      date,
    });
    console.log(res);
  };

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.item}>
            <FormLabel>Title</FormLabel>
            <FormInput
              onChangeText={this._changeTitle}
              value={this.state.title}
              selectionColor={Colors.$redColor}
            />
          </View>
          <View style={styles.item}>
            <FormLabel>Description</FormLabel>
            <FormInput
              onChangeText={this._changeDescription}
              value={this.state.description}
              selectionColor={Colors.$redColor}
              multiline
            />
          </View>
          <View style={styles.item}>
            <Button
              onPress={this._showDateTimePicker}
              title={this._checkTitle()}
              raised
            />
          </View>
          <View style={styles.buttonCreate}>
            <Button
              backgroundColor={Colors.$blackBlueColor}
              title="Create Meetup"
              raised
              disabled={this._checkIfButtonSubmitDisabled()}
              onPress={this._createMeetup}
            />
          </View>
        </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._handleDateTimePicker}
          mode="datetime"
        />
      </View>
    );
  }
}

export default CreateMeetupScreen;
