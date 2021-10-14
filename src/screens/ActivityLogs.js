import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  FlatList,
  Button,
  StyleSheet,
  Dimensions,
  Text,
} from 'react-native';
import TitleText from '../components/common/TitleText';
import AppText from '../components/common/AppText';
import CommonListHeader from '../components/common/CommonListHeader';
import {ActivityData} from '../data/FakeData';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import CommonBackground from '../components/backgrounds/CommonBackground';
import ActivityCard from '../components/cards/ActivityCard';
import Card from '../components/common/Card';

const ActivityLogs = () => {
  //// & flatlist function for Activity ///

  const renderItemActivity = ({item, index}) => {
    return (
      <Card disabled={true} style={styles.cardBack}>
        <AppText style={styles.date}>{item.date}</AppText>
        <FlatList
          data={item.data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <ActivityCard
                title={item.name}
                time={item.time}
                description={item.description}
                connectBar={index < Object.keys(item).length ? true : false}
              />
            );
          }}
        />
      </Card>
    );
  };

  //// & flatlist HeaderComponent function///

  const listHeaderComponent = () => {
    return (
      <>
        <CommonListHeader title={'Activity Logs'} />
      </>
    );
  };

  return (
    <CommonBackground>
      <FlatList
        ListHeaderComponent={listHeaderComponent}
        data={ActivityData}
        contentContainerStyle={{alignItems: 'center'}}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItemActivity}
      />
    </CommonBackground>
  );
};

const styles = StyleSheet.create({
  date: {
    alignSelf: 'flex-start',
    paddingHorizontal: wp(5),
    paddingTop: hp(2),
  },
  cardBack: {
    paddingBottom: hp(2),
  },
});
export default ActivityLogs;
