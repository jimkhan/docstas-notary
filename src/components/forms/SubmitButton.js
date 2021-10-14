import React from 'react';
import {StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';

import AppButton from '../common/AppButton';
import {Colors} from '../../config/Configure';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

function SubmitButton({title, style, textStyle}) {
  const {handleSubmit} = useFormikContext();

  return (
    <AppButton
      name={title}
      onPress={handleSubmit}
      textStyle={[styles.text, textStyle]}
      style={[styles.button, style]}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.buttonBack,
    marginTop: hp(3),
    borderRadius: hp(0.6),
    width: wp(80),
  },
  text: {
    color: Colors.white,
  },
});

export default SubmitButton;
