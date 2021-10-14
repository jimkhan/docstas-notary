import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from '../../screens/SignIn';
import SignUp from '../../screens/SignUp';
import SignUpAgent from '../../screens/SignUpAgent';
import TwoFactor from '../../screens/TwoFactor';
import AuthRootScreen from '../../screens/AuthRootScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'TwoFactor'}>
      <Stack.Screen name={'AuthRootScreen'} component={AuthRootScreen} />
      <Stack.Screen name={'SignIn'} component={SignIn} />
      <Stack.Screen name={'SignUp'} component={SignUp} />
      <Stack.Screen name={'SignUpAgent'} component={SignUpAgent} />
      <Stack.Screen name={'TwoFactor'} component={TwoFactor} />
    </Stack.Navigator>
  );
};

export default AuthStack;
