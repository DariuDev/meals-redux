import React from 'react';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import {CategoryNavigator} from './CategoryNavigator';
import {FavoriteNavigator} from './FavoriteNavigator';

const Tab = createMaterialBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator
      activeColor="#00aea2"
      inactiveColor="#95a5a6"
      barStyle={{backgroundColor: '#ffffff'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'CategoryNavigator') {
            iconName = 'md-restaurant';
          } else if (route.name === 'FavoriteNavigator') {
            iconName = 'md-settings';
          }
          // return <Ionicons name={iconName} size={20} color={color} />;
        },
        backgroundColor: '#ffffff',
      })}>
      <Tab.Screen name="Categories" component={CategoryNavigator} />
      <Tab.Screen name="Favorites" component={FavoriteNavigator} />
    </Tab.Navigator>
  );
};
