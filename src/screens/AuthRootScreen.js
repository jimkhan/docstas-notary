import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AuthBackground from '../components/backgrounds/AuthBackground';
import AppText from '../components/common/AppText';
import AppButton from '../components/common/AppButton';
import {Colors, FontSize} from '../config/Configure';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const AuthRootScreen = ({navigation}) => {
  return (
    <AuthBackground scrollEnabled={false}>
      <AppText style={styles.topText}>
        Remote closings and legal {'\n'} transactions shouldnm’t be difficult
      </AppText>

      <View style={styles.buttonArea}>
        <AppButton
          onPress={() => navigation.navigate('SignIn')}
          name={'Login with Email'}
          iconName={'md-mail'}
        />
        <AppButton
          name={'Login with Google'}
          iconName={'md-logo-google'}
          iconBackground={{backgroundColor: Colors.white}}
          iconColor={Colors.red}
          textStyle={styles.buttonText}
          style={styles.buttonBack}
        />
      </View>
      <View style={styles.bottomTextArea}>
        <AppText style={styles.bottomText}>Don’t have an account?</AppText>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={styles.signUp}>
          <AppText style={styles.bottomTextSignUp}>SignUp</AppText>
        </TouchableOpacity>
      </View>
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  buttonArea: {
    height: hp(19),
    justifyContent: 'space-between',
    marginTop: hp(12),
    marginBottom: hp(3.5),
  },
  bottomText: {
    fontSize: FontSize.m,
  },
  bottomTextSignUp: {
    color: Colors.primary,
    paddingLeft: wp(2),
  },
  topText: {
    textAlign: 'center',
    fontSize: FontSize.m,
  },
  bottomTextArea: {
    flexDirection: 'row',
  },
  buttonBack: {
    backgroundColor: Colors.gmail,
  },
  buttonText: {
    color: Colors.white,
  },
  signUp: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthRootScreen;
