import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import {useAuth} from '../authContext/auth';

// Functions

export default ({navigation}) => {
  const {user, SingOut} = useAuth();
  return (
    <View style={style.container}>
      <Text>{user}</Text>
      <Text onPress={SingOut}>Home Screen</Text>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
