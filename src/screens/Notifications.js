import React, {useState, useRef, useEffect} from 'react';
import {View, FlatList, Button, StyleSheet, Dimensions} from 'react-native';
import TitleText from '../components/common/TitleText';
import AppText from '../components/common/AppText';
import CommonListHeader from '../components/common/CommonListHeader';
import OrderCard from '../components/cards/OrderCard';
import StatusCard from '../components/cards/StatusCard';
import SearchField from '../components/search/SearchField';
import {Colors} from '../config/Configure';
import {OrderData} from '../data/FakeData';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CommonBackground from '../components/backgrounds/CommonBackground';
import NotificationCard from '../components/cards/NotificationCard';

const Notifications = () => {
  //// & flatlist function for Order list ///

  const renderItemOrder = ({item, index}) => {
    return (
      <NotificationCard
        title={item.clientName}
        status={item.status}
        date={item.date}
        document={item.numDocuments}
        billStatus={item.paymentStatus}
        userName={item.agentName}
      />
    );
  };

  //// & flatlist HeaderComponent function///

  const listHeaderComponent = () => {
    return (
      <>
        <CommonListHeader title={'Notifications'} />
      </>
    );
  };

  return (
    <CommonBackground>
      <FlatList
        ListHeaderComponent={listHeaderComponent}
        data={OrderData}
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItemOrder}
      />
    </CommonBackground>
  );
};

export default Notifications;
