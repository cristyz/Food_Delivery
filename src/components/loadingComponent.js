import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';

export default () => (
  <View style={style.container}>
    <Text style={style.logo}>Delivery</Text>
    <Text style={style.logo}>App</Text>
    <ActivityIndicator style={style.atcivity} size="large" color="#560CCE" />
  </View>
);

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 90,
    fontFamily: 'TitleFont',
    color: '#560CCE',
  },
  atcivity: {
    marginTop: 40,
  },
});
