import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../views/HomeScreen';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
