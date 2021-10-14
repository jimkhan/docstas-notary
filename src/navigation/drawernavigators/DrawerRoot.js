import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackRoot from '../stackNavigators/StackRoot';
import Notifications from '../../screens/Notifications';
import ActivityLogs from '../../screens/ActivityLogs';
const Drawer = createDrawerNavigator();
import {DrawerContent} from './DrawerContent';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import * as CustomeHeader from '../customeHeader/CustomeHead';

const DrawerRoot = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        // headerShown: false,
        headerStyle: styles.headerStyle,
        headerLeft: props => <CustomeHeader.UserImage {...props} />,
        headerTitle: props => <CustomeHeader.MainLogo {...props} />,
        headerRight: props => <CustomeHeader.MenuAndBell {...props} />,
        drawerActiveTintColor: 'black',
        drawerInactiveTintColor: 'white',
        drawerActiveBackgroundColor: '#c6cbef',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={'StackRoot'}
        component={StackRoot}
        options={{
          drawerLabel: 'Home',
          drawerLabelStyle: {
            fontFamily: 'helvetica-neue-bold',
            fontWeight: 'normal',
          },
          drawerIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={'Notifications'}
        component={Notifications}
        options={{
          drawerLabel: 'Notifications',
          drawerLabelStyle: {
            fontFamily: 'helvetica-neue-bold',
            fontWeight: 'normal',
          },
          drawerIcon: ({color, size}) => (
            <Icon name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name={'ActivityLogs'}
        component={ActivityLogs}
        options={{
          drawerLabel: 'ActivityLogs',
          drawerLabelStyle: {
            fontFamily: 'helvetica-neue-bold',
            fontWeight: 'normal',
          },
          drawerIcon: ({color, size}) => (
            <Icon name="trending-up-sharp" color={color} size={size} />
          ),
        }}
      />
      {/* <Drawer.Screen options={{}} name={'StackRoot'} component={StackRoot} /> */}
    </Drawer.Navigator>
  );
};
const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#272B73',
    height: hp(11),
    borderBottomWidth: 0.1,
    borderColor: '#ADADAD',
  },
});

export default DrawerRoot;
