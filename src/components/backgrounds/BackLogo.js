import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {Colors} from '../../config/Configure';

const WIDTH = hp(15);
const BackLogo = () => {
  return (
    <Image
      source={require('../../img/logoBack.png')}
      style={styles.imageLogo}
    />
  );
};

const styles = StyleSheet.create({
  imageLogo: {
    height: WIDTH * 1.29,
    width: WIDTH,
    marginTop: hp(17.4),
    marginBottom: hp(4),
  },
});
export default BackLogo;
