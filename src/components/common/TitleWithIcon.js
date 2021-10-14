import React from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, Spacing, FontSize} from '../../config/Configure';
import Icon from 'react-native-vector-icons/Ionicons';
import AppText from './AppText';

const TitleWithIcon = ({
  title = 'October 25 2021',
  iconName = 'calendar-outline',
  iconSize,
  iconColor,
  styleIconArea,
  textStyle,
  ...otherProps
}) => {
  return (
    <View style={styles.container}>
      {iconName && (
        <View style={[styles.iconArea, styleIconArea]}>
          <Icon
            name={iconName}
            size={iconSize ? RFValue(iconSize) : RFValue(FontSize.s - 1)}
            color={iconColor ? iconColor : Colors.lightGray}
            {...otherProps}
          />
        </View>
      )}
      <AppText style={textStyle} numberOfLines={1} ellipsizeMode="tail">
        {title}
      </AppText>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: hp(0.4),
  },
  iconArea: {
    marginRight: hp(1),
  },
});

export default TitleWithIcon;
