import { Image, View, Text, TextInput, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { setSearch } from '../reduxState/searchSlice';

const SearchSection = () => {
  const profileDataIndex = useSelector((state) => state.acc.whoIsLogin);
  const profileData = useSelector(
    (state) => state.acc.account[profileDataIndex]
  );
  const [location, setLocation] = useState();
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [count, setCount] = useState();
  const dispatch = useDispatch();

  const handleHitApi = (location, checkIn, checkOut, count) => {
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = checkOut.getTime() - checkIn.getTime();
    const countDays = Math.round(diffInTime / oneDay);
    const checkin = checkIn.toISOString().slice(0, 10);
    const checkout = checkOut.toISOString().slice(0, 10);
    dispatch(setSearch({ location, checkin, checkout, count, countDays }));
    setCount(null)
    setLocation(null)
  };

  const showModeCheckIn = (currentMode) => {
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setCheckIn(currentDate);
    };

    DateTimePickerAndroid.open({
      value: checkIn,
      onChange,
      mode: 'date',
      is24Hour: true,
    });
  };

  const showModeCheckOut = (currentMode) => {
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setCheckOut(currentDate);
    };

    DateTimePickerAndroid.open({
      value: checkIn,
      onChange,
      mode: 'date',
      is24Hour: true,
    });
  };

  useEffect(() => {
  }, [location, checkIn, checkOut, count]);

  return (
    <View className='w-5/6 mx-auto mb-5'>
      <View className='bg-[#6E6BE8] w-screen -ml-10 rounded-b-[48px]'>
        <View className='w-5/6 mx-auto mt-10'>
          <Text className='font-bold text-xl text-white'>
            Hi {profileData.name},
          </Text>
          <Text className='text-white mb-6'>Where do you want to go?</Text>
          <View className='flex flex-row bg-slate-100 mb-6 p-4 rounded-2xl rounded-tl-none'>
            <Image
              source={require('../icons/search.png')}
              className='flex-none'
            />
            <TextInput
              onChangeText={setLocation}
              autoCorrect={true}
              placeholder=' Find it here'
              className='flex-1'
            />
          </View>
          <View className='flex-row'>
            <View className='flex-1 flex-row bg-slate-100 mb-6 mr-2 p-4 rounded-2xl'>
              <Image
                source={require('../icons/calendar.png')}
                className='flex-none'
              />
              <Pressable onPress={() => showModeCheckIn()}>
                <TextInput
                  editable={false}
                  value={checkIn.toLocaleDateString()}
                  autoCorrect={true}
                  placeholder='Check-in Date'
                  className='flex-1'
                />
              </Pressable>
            </View>
            <View className='flex-1 flex-row bg-slate-100 mb-6 p-4 rounded-2xl'>
              <Image
                source={require('../icons/calendar.png')}
                className='flex-none'
              />
              <Pressable onPress={() => showModeCheckOut()}>
                <TextInput
                  editable={false}
                  value={checkOut.toLocaleDateString()}
                  autoCorrect={true}
                  placeholder=' Check-out Date'
                  className='flex-1'
                />
              </Pressable>
            </View>
          </View>
          <View className='flex-row bg-slate-100 mb-6 p-4 rounded-2xl'>
            <Image
              source={require('../icons/user.png')}
              className='flex-none'
            />
            <TextInput
              onSubmitEditing={() =>
                handleHitApi(location, checkIn, checkOut, count)
              }
              onChangeText={setCount}
              keyboardType='numeric'
              autoCorrect={true}
              placeholder=' Guest'
              className='flex-1'
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchSection;
