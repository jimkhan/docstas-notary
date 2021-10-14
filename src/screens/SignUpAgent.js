import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AuthBackground from '../components/backgrounds/AuthBackground';
import AppText from '../components/common/AppText';
import TitleText from '../components/common/TitleText';
import * as yup from 'yup';
import {Colors, FontSize} from '../config/Configure';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {FormField, AppForm, SubmitButton} from '../components/forms';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = yup.object().shape({
  companyname: yup.string().required().label('Company Name'),
  email: yup.string().required().email().label('Email Address'),
  firstname: yup.string().required().label('First name'),
  lastname: yup.string().required().label('Last name'),
  phone: yup.string().required().min(11).label('Phone Number'),
  phonenumbertype: yup.number().required().min(11).label('Phone Number Type'),
});
const SignUpAgent = ({navigation}) => {
  const [passIcon, setPassIcon] = useState('eye-outline');
  return (
    <AuthBackground>
      <AppText style={styles.topText}>Sign up as Signing Company</AppText>
      <AppForm
        initialValues={{
          companyname: '',
          email: '',
          firstname: '',
          lastname: '',
          phone: '',
          phonenumbertype: '',
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
        validator={() => ({})}>
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="companyname"
          placeholder="Company Name"
          //   textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="email"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="firstname"
          placeholder="First name"
          // textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          name="lastname"
          placeholder="Laset name"
          // textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          name="phone"
          placeholder="Phone"
          // textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          name="phonenumbertype"
          placeholder="Phone Number Type"
          // textContentType="emailAddress"
        />

        <SubmitButton title="Claim your account" />
      </AppForm>
      <View style={styles.bottom}>
        <AppText>Already have an account?</AppText>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <AppText style={styles.login}>Login instead</AppText>
        </TouchableOpacity>
      </View>
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  bottom: {
    paddingTop: hp(3),
  },
  login: {
    color: Colors.primary,
    paddingTop: hp(1),
  },
  topText: {
    textAlign: 'center',
    fontSize: FontSize.m,
    marginBottom: hp(4),
  },
});

export default SignUpAgent;
