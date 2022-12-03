import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Button from '../components/Button';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { logOut, updateProfile } from '../reduxState/accSlice';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';

const Settings = () => {
  const navigate = useNavigation();
  const profileDataIndex = useSelector((state) => state.acc.whoIsLogin);
  const profileData = useSelector(
    (state) => state.acc.account[profileDataIndex]
  );
  const [name, setName] = useState(profileData.name);
  const [noHp, setNoHp] = useState(profileData.noHp);
  const [email, setEmail] = useState(profileData.email);
  const [gender, setGender] = useState(profileData.gender);
  const dispatch = useDispatch();
  const updateProfileHandle = (name, email, noHp, gender) => {
    dispatch(updateProfile({ name, email, noHp, gender }));
  };

  const logout = () => {
    dispatch(logOut());
    navigate.navigate('Login');
  };

  return (
    <ScrollView>
      <View className='w-5/6 mx-auto my-10'>
        <Header onPress={() => navigate.goBack()}>Member</Header>
        <View>
          <Text className='text-lg font-semibold mb-4'>My Account</Text>
          <View className='mb-8'>
            <Text className='font-medium mb-2'>Name</Text>
            <TextInput
              onChangeText={setName}
              className=' text-slate-500 mb-4 border-b border-slate-200 py-2'
            >
              {profileData.name}
            </TextInput>
            <Text className='font-medium'>Email</Text>
            <TextInput
              onChangeText={setEmail}
              className=' text-slate-500 mb-4 border-b border-slate-200 py-2'
            >
              {profileData.email}
            </TextInput>
            <Text className='font-medium'>No Handphone</Text>
            <TextInput
              onChangeText={setNoHp}
              className=' text-slate-500 mb-4 border-b border-slate-200 py-2'
            >
              {profileData.noHp}
            </TextInput>
            <Text className='font-medium'>Gender</Text>
            <TextInput
              onChangeText={setGender}
              className=' text-slate-500 mb-4 border-b border-slate-200 py-2'
            >
              {profileData.gender}
            </TextInput>
          </View>
          <Button
            onPress={() => updateProfileHandle(name, email, noHp, gender)}
          >
            Update Profile
          </Button>
          <View>
            <Text className='text-lg font-semibold'>Support</Text>
            <Text className=' text-slate-500 mb-4 border-b border-slate-200 py-2'>
              Term & Policy
            </Text>
            <Text
              onPress={() => navigate.navigate('Member')}
              className='text-blue-500 mb-4 border-b border-slate-200 py-2'
            >
              About US
            </Text>
            <Text
              onPress={() => logout()}
              className='text-red-500 mb-4 border-b border-slate-200 py-2'
            >
              Log Out
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Settings;
