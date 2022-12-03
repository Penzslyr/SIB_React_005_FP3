import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import CardSmall from '../components/CardSmall';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const wishlist = useSelector((state) => state.wish.data);
  const navigate = useNavigation();
  return (
    <View className='w-5/6 mx-auto my-10'>
      <Header onPress={() => navigate.goBack()}>Favorites</Header>
      <ScrollView>
        {wishlist &&
          wishlist.map((item) => <CardSmall key={item.id} item={item} />)}
      </ScrollView>
    </View>
  );
};

export default Favorites;
