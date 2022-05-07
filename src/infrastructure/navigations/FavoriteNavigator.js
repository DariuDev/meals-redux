import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FavoritesScreen} from '../../features/screens/FavoritesScreen';

const FavoriteStack = createNativeStackNavigator();

export const FavoriteNavigator = () => {
  return (
    <FavoriteStack.Navigator headerMode="false">
      <FavoriteStack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
      />
    </FavoriteStack.Navigator>
  );
};
