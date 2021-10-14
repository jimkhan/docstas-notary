import React, {useEffect} from 'react';

import Root from './src/navigation/Root';
import {LogBox, SafeAreaView, StyleSheet} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import AsyncStorage from '@react-native-async-storage/async-storage';

import {store} from './src/store/GlobalStore';
import {Provider} from 'react-redux';
import {signIn} from './src/feature/auth/authentication';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const checkAuth = async () => {
    try {
      const token = await AsyncStorage.getItem('lUserToken');
      if (token) {
        store.dispatch(signIn(token.toString()));
      }
    } catch (e) {}
  };
  useEffect(() => {
    checkAuth();
    setTimeout(() => {
      SplashScreen.hide();
    }, 500);
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Root />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
