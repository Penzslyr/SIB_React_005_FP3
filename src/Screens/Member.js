import { View, Text, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import React from 'react';
import Header from '../components/Header';
import CardSmall from '../components/CardSmall';
import { useNavigation } from '@react-navigation/native';

const Member = () => {
  const navigate = useNavigation();
  const profileDataIndex = useSelector((state) => state.acc.whoIsLogin);
  const bookData = useSelector((state) => state.booking.data);
  const wishlist = useSelector((state) => state.wish.data);
  const profileData = useSelector(
    (state) => state.acc.account[profileDataIndex]
  );
  const namaLengkap = `${profileData.name}`;



  return (
    <View className='w-5/6 mx-auto'>
      <Header onPress={() => navigate.goBack()}>Profile</Header>
      <View className='mb-8'>
        <View className='border-solid border-2 border-slate-200 h-24 w-full mt-4 absolute border-l-0 rounded-3xl shadow-lg shadow-blue-500/50 bg-white'></View>
        <View className='flex-row'>
          <Image
            source={require('../images/Effendi.jpg')}
            className='w-32 h-32 rounded-full rounded-tl-none'
          />
          <View className='my-auto ml-4'>
            <Text className='font-semibold text-indigo-900 mb-2'>
            Effendi Prakoso
            </Text>
            <Text className='text-xs text-slate-400'>RCTN-KS05-016</Text>
          </View>
        </View>
      </View>
      <View className='mb-8'>
        <View className='border-solid border-2 border-slate-200 h-24 w-full mt-4 absolute border-l-0 rounded-3xl shadow-lg shadow-blue-500/50 bg-white'></View>
        <View className='flex-row'>
          <Image
            source={require('../images/salman.jpg')}
            className='w-32 h-32 rounded-full rounded-tl-none'
          />
          <View className='my-auto ml-4'>
            <Text className='font-semibold text-indigo-900 mb-2'>
            Salman Alfarizi
            </Text>
            <Text className='text-xs text-slate-400'>RCTN-KS05-018 </Text>
          </View>
        </View>
      </View>
      <View className='mb-8'>
        <View className='border-solid border-2 border-slate-200 h-24 w-full mt-4 absolute border-l-0 rounded-3xl shadow-lg shadow-blue-500/50 bg-white'></View>
        <View className='flex-row'>
          <Image
            source={require('../images/miftah.jpg')}
            className='w-32 h-32 rounded-full rounded-tl-none'
          />
          <View className='my-auto ml-4'>
            <Text className='font-semibold text-indigo-900 mb-2'>
            Moh. Aulia Miftakhurahmat
            </Text>
            <Text className='text-xs text-slate-400'>RCTN-KS05-021</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Member;
