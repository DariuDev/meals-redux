import React from 'react';
import {View, Text} from 'react-native';

export const CategoriesScreen = ({navigation}) => {
  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate('MealsDetailScreen');
        }}>
        categories screen
      </Text>
    </View>
  );
};
