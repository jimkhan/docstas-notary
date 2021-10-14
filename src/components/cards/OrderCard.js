import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Card from '../common/Card';
import TitleText from '../common/TitleText';
import AppText from '../common/AppText';
import TitleWithIcon from '../common/TitleWithIcon';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { Colors, Spacing, FontSize} from '../../config/Configure'

const OrderCard = ({title = "Qurban Ali, Arlington", status = "pending", date, document, billStatus, userName }) => {

  let textcolor = status.replace(" ","");
  // console.log(textcolor)

  return (
    <Card>
      <View style={styles.containerOne}>
        <View style={styles.title}>
          <TitleText style={styles.titleText} numberOfLines={1} ellipsizeMode="tail"  >{title}</TitleText>
        </View>
        <View style={styles.status}>
          <AppText style={{ color: Colors[textcolor]}} >{status}</AppText>
        </View>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.detailsLeft}>
          <TitleWithIcon title={date} iconName = "calendar-outline" />
          <TitleWithIcon title={"2 Documents"} iconName = "document-text-outline" iconSize={17} />
        </View>
        <View style={styles.detailsRight}>
            <TitleWithIcon title={"Not Paid"} iconName = "wallet-outline" iconSize={17} />
          <TitleWithIcon title={"john Doe"} iconName = "person-circle-sharp" iconSize={18} />
        </View>
      </View>
    </Card>
  );
};
const styles = StyleSheet.create({
    containerOne: {
    height: hp(7),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: hp(3),
    justifyContent: 'space-between',
    // backgroundColor: 'red'
  },
    containerTwo: {
    height: hp(10),
    width: wp(85),
    flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: hp(3),
    justifyContent: 'space-between',
    // backgroundColor: 'green'
  },
  detailsLeft: {
      width: wp(40)
  },
  detailsRight: {
    width: wp(40)
  },
  title: {
    // width: wp(60)
  },
  titleText: {
    width: wp(60)
  }
});

export default OrderCard;
