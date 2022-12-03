import React, { useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogin } from '../reduxState/accSlice';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
  const navigate = useNavigation();
  const isLogin = useSelector((state) => state.acc.isLogin);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginTemp, setLoginTemp] = useState();
  const nextStep = useRef(isLogin);
  const [done, setDone] = useState(false);
  const dispatch = useDispatch();

  const loginClick = (email, password) => {
    dispatch(checkLogin({ email, password }));
  };

  useEffect(() => {
    if (isLogin) {
      navigate.navigate('Dashboard');
    }
  }, [isLogin]);

  return (
    <ScrollView>
      <StatusBar />
      <View className='items-center mb-8'>
        <Image
          source={require('../icons/logo_icon.png')}
          className='w-24 h-16 mt-48 mb-6'
        />
        <Text className='font-bold text-slate-700 text-xl mb-5'>Log in</Text>
        <Text className='font-thin text-slate-500 text-xs'>Welcome back!</Text>
        {}
      </View>
      <View className='w-5/6 mx-auto border-solid border-2 border-slate-200 rounded-3xl p-6 rounded-tl-none'>
        <Text className='text-slate-800 text-xs'>Email</Text>
        <View className='flex flex-row border-b border-slate-200 mb-6'>
          <Image
            source={require('../icons/user.png')}
            className='flex-none mt-7 mr-3'
          />
          <TextInput
            autoComplete='email'
            onChangeText={setEmail}
            value={email}
            placeholder='Masukkan Email'
            className='mt-6 flex-1'
          />
        </View>
        <Text className='text-slate-800 text-xs'>Password</Text>
        <View className='flex flex-row border-b border-slate-200 mb-6'>
          <Image
            source={require('../icons/key.png')}
            className='flex-none mt-7 mr-3'
          />
          <TextInput
            onChangeText={setPassword}
            secureTextEntry={true}
            autoCorrect={false}
            value={password}
            placeholder='Masukkan Password'
            className='mt-6 flex-1'
          />
        </View>
        <TouchableOpacity onPress={() => loginClick(email, password)}>
          <View className='bg-[#6E6BE8] p-3 rounded-xl'>
            <Text className='text-white text-center'>Log in</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginForm;
