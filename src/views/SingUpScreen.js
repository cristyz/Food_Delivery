import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ({navigation}) => {
  return (
    <View style={style.container}>
      <Text onPress={() => navigation.navigate('LoginScreen')}>
        SingUp Page
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
