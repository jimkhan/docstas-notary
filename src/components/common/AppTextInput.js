import React from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';

import Icon from 'react-native-vector-icons/Ionicons';

import {Colors, FontSize} from '../../config/Configure';
import AppText from './AppText';

const AppTextInput = ({
  title,
  styletext,
  icon,
  style,
  onPressRightIcon,
  ...otherProps
}) => {
  return (
    <>
      <View style={styles.main}>
        {title && <AppText style={styles.text}>{title}</AppText>}
        <View style={[styles.conatiner, style]}>
          <TextInput
            style={[styles.inputtext, styletext]}
            placeholderTextColor={Colors.lightGray}
            {...otherProps}
          />
          {icon && (
            <TouchableOpacity onPress={onPressRightIcon}>
              <Icon
                name={icon}
                size={RFValue(25)}
                style={styles.icon}
                color={Colors.lightGray}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    marginVertical: hp(0.4),
  },
  conatiner: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(80),
    height: hp(6.5),
    paddingHorizontal: wp(3),
    marginVertical: hp(1),
    borderWidth: wp(0.2),
    borderRadius: hp(4),
    backgroundColor: Colors.white,
    borderColor: Colors.lightGray,
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'stretch',
    fontSize: RFValue(13),
    paddingHorizontal: wp(2),
  },
  icon: {
    color: Colors.darkGray,
    // backgroundColor: "green",
    width: wp(8),
  },
  inputtext: {
    width: wp(64),
    fontSize: FontSize.m,
    fontFamily: 'helvetica-neue-medium',
    fontWeight: 'normal',
    color: Colors.darkGray,
    // backgroundColor: 'green',
  },
});

export default AppTextInput;
