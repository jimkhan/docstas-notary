import React from 'react';
import {StyleSheet} from 'react-native';

import AppText from '../common/AppText';

import {Colors, FontSize} from '../../config/Configure';

const ErrorMessage = ({error, visible}) => {
  return (
    <>{visible && error && <AppText style={styles.text}>{error}</AppText>}</>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.red,
    fontSize: FontSize.es,
  },
});

export default ErrorMessage;
