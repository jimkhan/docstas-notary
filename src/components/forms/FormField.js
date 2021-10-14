import React from 'react';
import {StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';

import AppTextInput from '../common/AppTextInput';
import ErrorMessage from './ErrorMessage';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

function FormField({name, ...otherProps}) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

  return (
    <>
      <AppTextInput
        style={styles.container}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: hp(0.5),
    marginBottom: hp(0.1),
  },
});

export default FormField;
