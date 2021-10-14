import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, FontSize} from '../../config/Configure';

import AppText from './AppText';

const CommonListHeader = ({children, title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.body}>
        {title && <AppText style={styles.titleText}>{title}</AppText>}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(100),
    alignItems: 'center',
  },

  titleText: {
    color: Colors.white,
    fontSize: FontSize.xl,
    alignSelf: 'flex-start',
    paddingTop: hp(3),
    paddingBottom: hp(1),
  },
  body: {
    width: wp(92),
  },

  top: {
    position: 'absolute',
    height: hp(20.3),
    width: wp(100),
    backgroundColor: Colors.primary,
    borderBottomEndRadius: hp(3.5),
    borderBottomLeftRadius: hp(2),
    borderBottomStartRadius: hp(3.5),
    borderBottomRightRadius: hp(1),
  },
});

export default CommonListHeader;
