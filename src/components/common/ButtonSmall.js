import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, Spacing, FontSize} from '../../config/Configure';
import AppText from './AppText';

const ButtonSmall = ({
  name,
  style,
  textStyle,
  onPress,
  disabled,
  iconName,
  iconSize = 25,
  iconBackground,
  iconColor = Colors.white,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, style]}
      onPress={onPress}>
      <View style={styles.container}>
        <AppText style={[styles.buttontxt, textStyle]}>{name}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(30),
    height: hp(5.5),
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: hp(0.7),
    backgroundColor: Colors.buttonBack,
    marginTop: 10,
  },
  buttontxt: {
    color: Colors.white,
    fontSize: FontSize.m - 1,
  },
  container: {
    width: wp(75),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    width: hp(5.2),
    height: hp(5.2),
    borderRadius: wp(6),
    backgroundColor: Colors.primary,
  },
});
export default ButtonSmall;
