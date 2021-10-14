import React, {useState, useRef, useEffect} from 'react';
import {FlatList} from 'react-native';
import ListHeaderWraper from '../components/common/ListHeaderWraper';
import OrderCard from '../components/cards/OrderCard';
import StatusCard from '../components/cards/StatusCard';
import CommonBackground from '../components/backgrounds/CommonBackground';
import {Colors} from '../config/Configure';
import {StatusData, OrderData} from '../data/FakeData';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Loader from '../components/common/Loader';
import useApi from '../hooks/useApi';
import authApi from '../api/auth';
import {useSelector} from 'react-redux';

const width = wp(35.7);

const HomeScreen = ({navigation}) => {
  //// * hook section ///

  const [active, setActive] = useState('All Orders');
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [orderData, setOrderData] = useState(OrderData);
  const [callEffect, setCallEffect] = useState(true);
  const flatListRef = useRef();
  const token = useSelector(state => state.auth.userToken);
  // console.log(token);
  const {data, error, request: calluserInfo} = useApi(authApi.userInfo);

  //// * functions ///

  const activeCardHandler = name => {
    setActive(name);
    const newData = OrderData.filter(item => item.status === name);
    if (name !== 'All Orders') {
      setOrderData(newData);
    } else {
      setOrderData(OrderData);
    }
  };

  const scroolToActiveIndex = index => {
    if (activeIndex >= 1) {
      flatListRef.current?.scrollToOffset({
        offset: width * index - wp(17),
        animated: true,
      });
    }

    index !== activeIndex ? setCallEffect(!callEffect) : '';
    setActiveIndex(index);
  };

  ////& flatlist function for State list ///

  const renderItemList = ({item, index}) => {
    return (
      <StatusCard
        title={item.name}
        onPress={() => (
          activeCardHandler(item.name), scroolToActiveIndex(index)
        )}
        activeColor={
          item.name === active
            ? {backgroundColor: Colors.white}
            : {backgroundColor: Colors.cardBack}
        }
        textStyle={
          item.name === active ? {color: Colors.primary} : {color: Colors.white}
        }
      />
    );
  };

  //// & flatlist function for Order list ///

  const renderItemOrder = ({item, index}) => {
    return (
      <OrderCard
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
        <ListHeaderWraper>
          <FlatList
            data={StatusData}
            ref={flatListRef}
            horizontal={true}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItemList}
          />
        </ListHeaderWraper>
      </>
    );
  };
  ////! call await api ////

  ////! effect section ////

  useEffect(() => {
    scroolToActiveIndex(activeIndex);
  }, [callEffect]);

  useEffect(() => {
    calluserInfo(token);
    console.log('data', data);
  }, [error]);
  return (
    <CommonBackground>
      {!data && <Loader />}
      <>
        <FlatList
          ListHeaderComponent={listHeaderComponent}
          data={orderData}
          contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={renderItemOrder}
        />
      </>
    </CommonBackground>
  );
};

export default HomeScreen;
