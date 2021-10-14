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

const Button = ({
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
        {iconName && (
          <View style={[styles.icon, iconBackground]}>
            <Icon name={iconName} size={RFValue(iconSize)} color={iconColor} />
          </View>
        )}
        <AppText style={[styles.buttontxt, textStyle]}>{name}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(85),
    height: hp(7.5),
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: hp(0.7),
    marginTop: 10,
  },
  buttontxt: {
    color: Colors.primary,
    fontSize: FontSize.m,
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
export default Button;
