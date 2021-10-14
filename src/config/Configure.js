import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Colors = {
  primary: '#282973',
  secondary: '', //#ADADAD //#8E8E8E // #ADADAD // #ADADAD
  lightGray: '#ADADAD',
  darkGray: '#8E8E8E',
  AllOrders: '#E8526F', //#FD443C
  red: '#FD443C', //#FD443C
  gmail: '#EA4335', //#FD443C
  Pending: '#52E8D2',
  Completed: '#4A4DA0',
  Open: '#F7826D',
  OnHold: '#F7D26D',
  PostClosing: '#5FACEF',
  Closed: '#ACDD69',
  background: '#EDEDED',
  white: '#ffffff',
  black: '#000000',
  date: '#7C7DCE', //#DEDFFF
  document: '#DEDFFF', //#DEDFFF
  cardBack: '#ADADBF',
  border: '#CCCCCC',
  active: '#34BFA3',
  buttonBack: '#1376F6',
};

export const StatusIcon = {
  AllOrders: 'document-text-outline',
  Pending: 'time-outline',
  Completed: 'checkmark-circle-outline',
  Open: 'mail-open-outline',
  OnHold: 'pause-circle-outline',
  PostClosing: 'folder-outline',
  Closed: 'checkmark-done-outline',
};

export const Spacing = {
  s: hp(2),
  m: wp(5),
  l: hp(5),
  xl: hp(7),
  xxl: hp(30),
};

export const FontSize = {
  es: RFValue(12),
  s: RFValue(14),
  m: RFValue(16),
  l: RFValue(18),
  xl: RFValue(20),
  xxl: RFValue(30),
};

export const WIDTH = wp(92);
export const Redious = hp(2.7);
