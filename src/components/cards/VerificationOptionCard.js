import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Colors, FontSize} from '../../config/Configure';
import AppText from '../common/AppText';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {RadioButton} from 'react-native-paper';
const VerificationOptionCard = ({onPress, email, description}) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <TouchableWithoutFeedback onPress={() => setChecked(!checked)}>
      <View style={styles.container}>
        <View style={styles.radio}>
          <RadioButton
            value=""
            color={Colors.active}
            status={checked === true ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
          />
        </View>
        <View style={styles.textArea}>
          <AppText
            ellipsizeMode={'tail'}
            numberOfLines={1}
            style={[styles.text, styles.mailtext]}>
            {email}
          </AppText>
          <AppText style={styles.text}>{description}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(85),
    minHeight: hp(11.5),
    paddingVertical: hp(1),
    paddingHorizontal: hp(1),
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: hp(0.7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(3),
  },
  radio: {
    // backgroundColor: Colors.black,
    width: wp(7),
    alignItems: 'flex-start',
  },
  radiobuttonOutSide: {
    width: wp(7),
    justifyContent: 'center',
    alignItems: 'center',
  },
  radiobutton: {
    // height: hp(10),
    borderWidth: 0,
    // backgroundColor: Colors.black,
  },
  textArea: {
    width: wp(70),

    // backgroundColor: Colors.border,
    // justifyContent: 'center',
  },
  mailtext: {
    fontSize: FontSize.m + 1,
    paddingVertical: hp(0.6),
  },
  text: {
    color: Colors.darkGray,
    fontSize: FontSize.s - 1,
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
});

export default VerificationOptionCard;
