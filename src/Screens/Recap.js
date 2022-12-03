import { View, Text, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { bookAdded } from '../reduxState/bookingSlice';

const Recap = ({ route }) => {
  const profileDataIndex = useSelector((state) => state.acc.whoIsLogin);
  const profileData = useSelector(
    (state) => state.acc.account[profileDataIndex]
  );
  const searchData = useSelector((state) => state.search);

  const dispatch = useDispatch();
  const addBooking = () => {
    const newObject = { ...route.params.item, ...searchData };
    dispatch(bookAdded(newObject));
    navigate.navigate('Profile');
  };

  const navigate = useNavigation();

  return (
    <View className='w-5/6 mx-auto'>
      <Header onPress={() => navigate.goBack()}>Book Your Hotel</Header>
      <View>
        <Text className='font-semibold mb-4'>Contact Informations</Text>
        <View className='mb-6'>
          <Text className='text-xs mb-2'>Name</Text>
          <TextInput
            editable={false}
            className=' text-slate-500 mb-4 border-b border-slate-200 py-2'
          >
            {profileData.name}
          </TextInput>
          <Text className='text-xs'>Email</Text>
          <TextInput
            editable={false}
            className=' text-slate-500 mb-4 border-b border-slate-200 py-2'
          >
            {profileData.email}
          </TextInput>
          <Text className='text-xs'>No Handphone</Text>
          <TextInput
            editable={false}
            className=' text-slate-500 mb-4 border-b border-slate-200 py-2'
          >
            {profileData.noHp}
          </TextInput>
        </View>
      </View>
      <View>
        <Text className='font-semibold mb-4'>Price Summary</Text>
        <View className='mb-6'>
          <Text className='text-xs mb-2'>Detail Book</Text>
          <TextInput
            editable={false}
            className=' text-slate-500 mb-4 border-b border-slate-200 py-2'
          >
            {searchData.countDays} Days, {route.params.item.bedrooms} Bedrooms,{' '}
            {parseInt(searchData.adults)} Guest
          </TextInput>
          <Text className='text-xs'>Total</Text>
          <TextInput
            editable={false}
            className=' text-slate-500 mb-4 border-b border-slate-200 py-2'
          >
            $ {route.params.item.price.total}
          </TextInput>
          <Text className='text-xs'>
            Payable Now (Half Price)
          </Text>
          <TextInput editable={false} className='text-slate-500 mb-4 border-b border-slate-200 py-2'>
            $ {route.params.item.price.total / 2}
          </TextInput>
        </View>
      </View>
      <Button onPress={() => addBooking()}>Checkout</Button>
    </View>
  );
};

export default Recap;
