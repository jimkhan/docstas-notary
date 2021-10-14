import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ImageBackground,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import BackLogo from '../backgrounds/BackLogo';

import {Colors} from '../../config/Configure';

const WIDTH = hp(15);
const AuthBackground = ({children, scrollStyle, scrollEnabled = true}) => {
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={require('../../img/back.png')}
        style={styles.imageBack}>
        <ScrollView
          scrollEnabled={scrollEnabled}
          contentContainerStyle={[styles.container, scrollStyle]}
          showsVerticalScrollIndicator={false}>
          <BackLogo />
          {children}
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageBack: {
    flex: 1,
    height: hp('100%'),
    width: wp('100%'),
    alignItems: 'center',
  },

  container: {
    flexGrow: 1,
    alignItems: 'center',
    width: wp(100),
    paddingBottom: hp(5),
  },
});

export default AuthBackground;
