import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { checkLogin } from './src/reduxState/accSlice';
import { store } from './src/app/store';
import LoginForm from './src/Screens/LoginForm';
import Dashboard from './src/Screens/Dashboard';
import DetailHotel from './src/Screens/DetailHotel';
import Recap from './src/Screens/Recap';
import SearchResult from './src/Screens/SearchResult';
import Member from './src/Screens/Member';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Login'
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name='Login' component={LoginForm} />
          <Stack.Screen name='Dashboard' component={Dashboard} />
          <Stack.Screen name='SearchResult' component={SearchResult} />
          <Stack.Screen name='DetailHotel' component={DetailHotel} />
          <Stack.Screen name='Recap' component={Recap} />
          <Stack.Screen name='Member' component={Member} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
