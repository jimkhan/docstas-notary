import React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const ImageSize = 2.5;

// *  user Icon

export const UserImage = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.userImageContainer}
      onPress={() => navigation.navigate('Profile')}>
      <Image source={require('../../img/user.png')} style={styles.userImage} />
    </TouchableOpacity>
  );
};

// * main logo

export const MainLogo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../../img/logo.png')} style={styles.logo} />
    </View>
  );
};

// * menu and bell icon

export const MenuAndBell = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
        <Image
          source={require('../../img//bell.png')}
          style={styles.iamageBell}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          source={require('../../img/menu.png')}
          style={styles.iamageMenu}
        />
      </TouchableOpacity>
    </View>
  );
};

// * style section

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: wp(58),
    height: hp(8),
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "tomato",
  },
  iamageBell: {
    height: hp(ImageSize * 1.18),
    width: hp(ImageSize),
    marginRight: wp(7),
  },
  iamageMenu: {
    height: hp(ImageSize),
    width: hp(ImageSize * 1.05),
    marginRight: wp(5),
  },
  userImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(5),
    width: hp(5),
    borderColor: '#fff',
    borderWidth: 1,
    marginLeft: wp(5),
    borderRadius: hp(3),
  },
  userImage: {
    height: hp(ImageSize * 1.7),
    width: hp(ImageSize * 1.7),
  },
  logo: {
    height: hp(ImageSize),
    width: hp(ImageSize * 4.89), // Ratio of logo height and width
  },
});
