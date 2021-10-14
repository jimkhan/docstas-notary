import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../common/Card';
import TitleWithIcon from '../common/TitleWithIcon';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, StatusIcon, FontSize, WIDTH} from '../../config/Configure';

const StatusCard = ({title, textStyle, activeColor, onPress}) => {
  let iconAndColor = title.replace(' ', '');
  return (
    <Card style={[styles.container, activeColor]} onPress={onPress} >
      <TitleWithIcon
        title={title}
        textStyle={textStyle}
        iconName={StatusIcon[iconAndColor]}
        iconSize={25}
        iconColor={Colors.white}
        styleIconArea={[styles.iconArea, {backgroundColor: Colors[iconAndColor]},]}
      />
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    width: wp(35.7),
    minHeight: hp(6.3),
    borderRadius: hp(2),
    paddingHorizontal: wp(1),
    justifyContent: 'center',
    marginRight: wp(3),
    
  },
  iconArea: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(9),
    height: wp(9),
    borderRadius: wp(2),
  },
});

export default StatusCard;
