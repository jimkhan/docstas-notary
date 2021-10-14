import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../common/Card';
import TitleText from '../common/TitleText';
import AppText from '../common/AppText';
import TitleWithIcon from '../common/TitleWithIcon';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, Spacing, FontSize} from '../../config/Configure';

const NotificationCard = ({
  title = 'Qurban Ali, Arlington ami ali kodom jabi',
  status = 'pending',
  date,
  document,
  billStatus,
  userName,
}) => {
  let textcolor = status.replace(' ', '');
  // console.log(textcolor)

  return (
    <Card style={styles.container}>
      <View style={styles.smallArea}></View>
      <View style={styles.mainContainer}>
        <TitleText style={styles.titleText}>{title}</TitleText>
        <View style={styles.containerTwo}>
          <View style={styles.user}>
            <TitleWithIcon
              title={userName}
              iconName="person-circle-sharp"
              iconSize={18}
              textStyle={styles.textFont}
            />
          </View>
          <View style={styles.time}>
            <TitleWithIcon
              title={'1 week'}
              iconName="time-outline"
              iconSize={17}
              textStyle={styles.textFont}
            />
          </View>
        </View>
        <View style={styles.document}>
          <TitleText style={styles.textDocument}>Document</TitleText>
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: hp(18),
  },
  document: {
    marginTop: hp(1),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderRadius: hp(2),
  },
  textDocument: {
    fontSize: FontSize.s - 2,
    backgroundColor: Colors.document,
    paddingHorizontal: wp(3),
    paddingVertical: wp(1.2),
    borderRadius: wp(5),
  },
  titleText: {
    fontSize: FontSize.m,
    width: wp(50),
    alignSelf: 'flex-start',
    // backgroundColor: "green"
    paddingTop: hp(2),
    paddingBottom: hp(1)
  },
  textFont: {
    fontSize: FontSize.m,
  },
  mainContainer: {
    width: wp(85),
    alignItems: 'flex-start',
  },
  smallArea: {
    width: wp(15),
    // backgroundColor: "yellow",
  },

  containerTwo: {
    width: wp(72),
    flexDirection: 'row',
    // paddingHorizontal: hp(3),
    justifyContent: 'space-between',
    // backgroundColor: 'red'
  },
  user: {
    width: wp(30),
  },
  time: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: wp(30),
    // backgroundColor: 'orange'
  },
});

export default NotificationCard;
