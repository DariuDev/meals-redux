import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {CategoriesScreen} from '../../features/screens/CategoriesScreen';
import {CategoryMealScreen} from '../../features/screens/CategoryMealScreen';
import {MealsDetailScreen} from '../../features/screens/MealsDetailScreen';

const CategoryStack = createNativeStackNavigator();

export const CategoryNavigator = () => {
  return (
    <CategoryStack.Navigator
      headerMode="none"
      screenOptions={{
        presentation: 'modal',
        gestureEnabled: true,
      }}>
      <CategoryStack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
      />
      <CategoryStack.Screen
        name="CategoryMealScreen"
        component={CategoryMealScreen}
      />
      <CategoryStack.Screen
        name="MealsDetailScreen"
        component={MealsDetailScreen}
      />
    </CategoryStack.Navigator>
  );
};
