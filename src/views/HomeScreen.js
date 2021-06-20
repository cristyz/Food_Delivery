import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAuth} from '../authContext/auth';

export default ({navigation}) => {
  const {user, SingOut} = useAuth();
  return (
    <View style={style.container}>
      <Text>{user}</Text>
      <Text onPress={SingOut}>Home Screen</Text>
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
