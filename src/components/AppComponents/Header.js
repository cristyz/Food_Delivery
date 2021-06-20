import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useAuth} from '../../authContext/auth';

export default ({navigation}) => {
  const {user} = useAuth();
  return (
    <View style={style.container}>
      <View style={style.helloView}>
        <Text style={style.helloTexts}>
          Hello <Text style={style.userName}>{user}</Text>
        </Text>
        <Image
          resizeMode="contain"
          style={style.avatar}
          source={require('../../assets/imgs/imgUser.png')}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  helloView: {
    marginTop: 40,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  helloTexts: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  userName: {
    color: '#560CCE',
  },
  avatar: {
    width: 40,
    height: 40,
  },
});
