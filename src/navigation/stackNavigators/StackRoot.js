import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen';
import Profile from '../../screens/Profile';
import DetailsScreen from '../../screens/DetailsScreen';
import Notifications from '../../screens/Notifications';
import ActivityLogs from '../../screens/ActivityLogs';

const Stack = createNativeStackNavigator();

const StackRoot = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'HomeScreen'}>
      <Stack.Screen name={'HomeScreen'} component={HomeScreen} />
      <Stack.Screen name={'Profile'} component={Profile} />
      <Stack.Screen name={'DetailsScreen'} component={DetailsScreen} />
      <Stack.Screen name={'Notifications'} component={Notifications} />
      <Stack.Screen name={'ActivityLogs'} component={ActivityLogs} />
    </Stack.Navigator>
  );
};

export default StackRoot;
