import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SingUpScreen from '../views/SingUpScreen';
import LoginScreen from '../views/LoginScreen';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SingUpScreen" component={SingUpScreen} />
    </Stack.Navigator>
  );
};
