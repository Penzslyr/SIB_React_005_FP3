import { View, Text, Image } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { TabActions, useNavigation } from '@react-navigation/native';
import Recap from './Recap';

const DetailHotel = ({ route }) => {
  const navigate = useNavigation();
  return (
    <View className='w-5/6 mx-auto'>
      <Header onPress={() => navigate.goBack()}>Pick Your Hotel</Header>
      <Image
        source={{ uri: route.params.item.images[0] }}
        className='w-full h-1/2 rounded-3xl rounded-tl-none mb-4'
      />
      <Text className='text-xs font-bold mb-4'>{route.params.item.city}</Text>
      <Text className='font-extralight text-slate-600 border-b border-slate-200 mb-4'>
        {route.params.item.name}
      </Text>
      <Text className='text-xs font-extralight text-slate-600 mb-10'>
        {route.params.item.address} |{route.params.item.type} | $
        {route.params.item.price.total} | {route.params.item.previewAmenities}
      </Text>
      <Button
        onPress={() => navigate.navigate('Recap', { item: route.params.item })}
      >
        Book this Hotel
      </Button>
    </View>
  );
};

export default DetailHotel;
