import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
  Divider,
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerNavigationProp,
} from '@react-navigation/drawer';
import {Colors, FontSize} from '../../config/Configure';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import AppText from '../../components/common/AppText';
import TitleText from '../../components/common/TitleText';
import {useSelector, useDispatch} from 'react-redux';
import {signOut} from '../../feature/auth/authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function DrawerContent(props) {
  const dispatch = useDispatch();

  const removeValue = async () => {
    try {
      await AsyncStorage.clear();
      dispatch(signOut());
      console.log('Done.');
    } catch (e) {
      // remove error
      console.log('error');
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: Colors.primary}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.headerTextArea}></View>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image source={require('../../img/user.png')} size={50} />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <TitleText style={styles.title}>John Doe</TitleText>
                <AppText style={styles.caption}>@j_doe</AppText>
              </View>
            </View>
          </View>
          <DrawerItemList {...props} />
          <Divider />
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          inactiveTintColor={'#fff'}
          icon={({color, size}) => (
            <Icon name="exit-outline" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={removeValue}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
    paddingBottom: 20,
  },
  headerTextArea: {
    height: heightPercentageToDP(10),
    width: widthPercentageToDP(100),
  },
  title: {
    marginTop: 3,
    color: '#fff',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelStyle: {
    color: Colors.white,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
    color: '#fff',
  },
  drawerSection: {
    marginTop: 15,
    // backgroundColor: 'green',
    color: '#fff',
  },
  bottomDrawerSection: {
    justifyContent: 'center',
    paddingTop: 10,
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 0.5,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
