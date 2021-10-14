import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import DrawerRoot from './drawernavigators/DrawerRoot';
import AuthStack from './AuthNavigation/AuthStack';

import {useSelector, useDispatch} from 'react-redux';
import {signIn, signOut} from '../feature/auth/authentication';

const Root = () => {
  const auth = useSelector(state => state.auth);
  const [isLoding, setIsLoding] = useState(true);
  const [token, setToken] = useState(null);
  // console.log(auth, 'root');

  useEffect(() => {
    setToken(auth.userToken), console.log(' root effect');
  }, [auth]);
  return (
    <NavigationContainer>
      {auth.userToken ? <DrawerRoot /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Root;
