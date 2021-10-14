import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import * as yup from 'yup';

import {FormField, AppForm, SubmitButton} from '../components/forms';
import AuthBackground from '../components/backgrounds/AuthBackground';
import Loader from '../components/common/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {useDispatch} from 'react-redux';
import {signIn} from '../feature/auth/authentication';

import authApi from '../api/auth';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().label('Password'),
});

const SignIn = () => {
  const [passIcon, setPassIcon] = useState('eye-outline');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const submitHadler = async ({email, password}) => {
    setIsLoading(true);
    const responce = await authApi.login(email, password);
    const token = responce.data.success.token;

    if (responce.ok) {
      try {
        await AsyncStorage.setItem('lUserToken', token);
      } catch (e) {}
      setIsLoading(false);
      dispatch(signIn(token));
    } else {
      setIsLoading(false);
      alert(`${responce.problem}`);
    }
  };

  return (
    <AuthBackground>
      {isLoading && <Loader animating={isLoading} />}
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={submitHadler}
        validationSchema={validationSchema}
        validator={() => ({})}>
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          // icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon={passIcon}
          onPressRightIcon={() =>
            setPassIcon(
              passIcon === 'eye-off-outline'
                ? 'eye-outline'
                : 'eye-off-outline',
            )
          }
          secureTextEntry={passIcon === 'eye-off-outline' ? false : true}
          name="password"
          placeholder="Password"
          textContentType="password"
        />
        <SubmitButton title="Login" style={styles.button} />
      </AppForm>
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: heightPercentageToDP(2),
    width: widthPercentageToDP(80),
  },
});

export default SignIn;
