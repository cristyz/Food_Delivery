import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default ({navigation}) => {
  return (
    <View style={style.container}>
      <Text> Home Screen </Text>
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
