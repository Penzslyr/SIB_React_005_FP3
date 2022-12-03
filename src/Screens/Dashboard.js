import { NavigationContainer, TabActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image } from 'react-native';
import Settings from './Settings';
import Favorites from './Favorites';
import Profile from './Profile';
import Home from './Home';
import SearchResult from './SearchResult';
import DetailHotel from './DetailHotel';
import Recap from './Recap';

const Tab = createBottomTabNavigator();

const IconBottom = (props) => {
  const { color, focused } = props.data;
  let colorSelected = focused ? color : 'grey';
  return (
    <View>
      <Image
        source={props.image}
        style={{ width: 24, height: 24, tintColor: colorSelected }}
      />
    </View>
  );
};

const Dashboard = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: '#6E6BE8',
        style: { height: 120 },
      }}
      className='m-4'
    >
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../icons/home.png')} />
          ),
        }}
      />
      <Tab.Screen
        name='Favorite'
        component={Favorites}
        options={{
          title: 'Favorite',
          tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../icons/heart.png')} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          title: 'Profile',
          tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../icons/user.png')} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          title: 'Settings',
          tabBarIcon: (props) => (
            <IconBottom data={props} image={require('../icons/settings.png')} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
