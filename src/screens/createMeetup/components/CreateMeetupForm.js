import React from 'react';
import { View } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-native-elements';

import { TextInputWithValidations } from '../../../commons';
import { createMeetupValidations } from '../validations';
import Colors from '../../../../constants/Colors';
import styles from './styles/CreateMeetupForm';

const CreateMeetupForm = ({
  createMeetup,
  checkTitle,
  showDateTimePicker,
  handleSubmit,
  invalid,
  submitting,
}) => (
  <View style={styles.container}>
    <Field
      component={TextInputWithValidations}
      name="title"
      label="Title"
      selectionColor={Colors.$redColor}
      containerStyle={styles.item}
    />

    <Field
      component={TextInputWithValidations}
      name="description"
      label="Description"
      selectionColor={Colors.$redColor}
      containerStyle={styles.item}
    />

    <View style={styles.item}>
      <Button raised onPress={showDateTimePicker} title={checkTitle} />
    </View>

    <View style={styles.buttonCreate}>
      <Button
        backgroundColor={Colors.$blackBlueColor}
        title="Create Meetup"
        raised
        disabled={invalid || submitting}
        onPress={handleSubmit(createMeetup)}
      />
    </View>
  </View>
);

export default reduxForm({
  form: 'createMeetup',
  validate: createMeetupValidations,
})(CreateMeetupForm);
