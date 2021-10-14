import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, FontSize} from '../../config/Configure';
import {MonthName} from '../../data/FakeData';
import SearchField from '../search/SearchField';
import AppText from './AppText';

const ListHeaderWraper = ({children}) => {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  return (
    <View style={styles.container}>
      <View style={styles.top} />
      <View style={styles.body}>
        <AppText style={styles.date}>
          {MonthName[month]} {year}
        </AppText>

        <View style={styles.textArea}>
          <AppText style={[styles.common, styles.titleText]}>12 Orders</AppText>
          <AppText style={[styles.common]}>All Order</AppText>
        </View>
        <SearchField onPressRightIcon={() => alert('pressed')} />
        {children}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(100),
    alignItems: 'center',
  },
  common: {
      color: Colors.white,
      fontSize: FontSize.m
  },
  titleText: {
      fontSize: FontSize.xxl
  },
  body: {
    width: wp(92),
  },
  date: {
    alignSelf: 'flex-start',
    color: Colors.date,
    padding: hp(1),
  },
  textArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: hp(1),
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

export default ListHeaderWraper;
