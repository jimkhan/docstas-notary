import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import * as yup from 'yup';

import {FormField, AppForm, SubmitButton} from '../components/forms';
import AuthBackground from '../components/backgrounds/AuthBackground';
import ButtonSmall from '../components/common/ButtonSmall';

import {useDispatch} from 'react-redux';
import {signIn} from '../feature/auth/authentication';
import VerificationOptionCard from '../components/cards/VerificationOptionCard';
import AppText from '../components/common/AppText';
import authApi from '../api/auth';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FontSize} from '../config/Configure';

const TwoFactor = () => {
  const [passIcon, setPassIcon] = useState('eye-outline');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  return (
    <AuthBackground>
      {/* {isLoading && <Loader animating={isLoading} />} */}
      <AppText style={styles.topText}>Two Factor Verification Method</AppText>
      <VerificationOptionCard
        email={'mrshoikot@gmail.com'}
        description={
          'You will receive an SMS in the number above with your verification code.'
        }
      />
      <VerificationOptionCard
        email={'mrshoikot@gmail.com'}
        description={
          'You will receive an SMS in the number above with your verification code.'
        }
      />
      <ButtonSmall name={'Update'} />
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  topText: {
    textAlign: 'center',
    fontSize: FontSize.m,
    marginBottom: hp(4),
  },
});

export default TwoFactor;
