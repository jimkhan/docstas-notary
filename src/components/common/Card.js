import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, WIDTH} from '../../config/Configure';

const Card = ({children, style, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    minHeight: hp(17),
    borderRadius: hp(2.2),
    backgroundColor: Colors.white,
    marginVertical: hp(1),
  },
});

export default Card;
