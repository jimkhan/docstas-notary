import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

import {Colors} from '../../config/Configure';

const CommonBackground = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
  },

});

export default CommonBackground;
