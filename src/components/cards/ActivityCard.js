import React from 'react';
import {View, Text, StyleSheet, Image, _Image} from 'react-native';
import Card from '../common/Card';
import TitleText from '../common/TitleText';
import AppText from '../common/AppText';
import TitleWithIcon from '../common/TitleWithIcon';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, Spacing, FontSize} from '../../config/Configure';
import Icon from 'react-native-vector-icons/Entypo';

const ActivityCard = ({
  title,
  time,
  description,
  iconColor = Colors.active,
  connectBar,
}) => {
  return (
    <Card style={styles.container}>
      <View style={styles.smallArea}>
        <Image source={require('../../img/user.png')} style={styles.user} />
        {connectBar && <View style={styles.connector} />}
      </View>
      <View style={styles.mainContainer}>
        <TitleText
          numberOfLines={1}
          ellipsizeMode="tail"
          style={styles.titleText}>
          {title}
        </TitleText>
        <View style={styles.containerTwo}>
          <AppText style={styles.text}>{time}</AppText>
          <AppText style={styles.text}>{description}</AppText>
        </View>
      </View>
      <View style={styles.status}>
        <Icon
          name={'dot-single'}
          size={45}
          color={iconColor}
          //   style={{backgroundColor: 'black'}}
        />
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: hp(12),
    paddingHorizontal: wp(4),
    // backgroundColor: 'green',
    marginBottom: hp(0.1),
    overflow: 'visible',
  },
  connector: {
    position: 'absolute',
    top: hp(8),
    left: wp(4.4),
    width: wp(0.5),
    height: hp(5),
    backgroundColor: Colors.lightGray,
    opacity: 0.5,
  },
  status: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    paddingLeft: wp(4),
  },
  titleText: {
    fontSize: FontSize.m,
    width: wp(50),
    alignSelf: 'flex-start',
    // backgroundColor: "green"
    paddingTop: hp(2),
    paddingBottom: hp(1),
  },
  textFont: {
    fontSize: FontSize.m,
  },
  mainContainer: {
    width: wp(60),
    marginLeft: wp(1),
  },
  smallArea: {
    paddingTop: hp(2),
    marginRight: wp(2),
    // backgroundColor: 'yellow',
  },

  containerTwo: {
    // width: wp(60),
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  user: {
    width: hp(5),
    height: hp(5),
  },
  text: {
    alignSelf: 'flex-start',
    marginBottom: hp(0.5),
    fontSize: FontSize.es,
  },
});

export default ActivityCard;
