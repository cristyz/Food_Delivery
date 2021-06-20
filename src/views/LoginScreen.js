import React, {useState} from 'react';
import {View, Text, StyleSheet, StatusBar, Image} from 'react-native';
import {Button, TextInput} from 'react-native-paper';

import {useAuth} from '../authContext/auth';

export default ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const {Login} = useAuth();

  return (
    <View style={style.container}>
      <Image
        style={style.Imagelogo}
        resizeMode="contain"
        source={require('../imgs/imgUser.png')}
      />
      <TextInput
        label="UserName"
        value={userName}
        mode="outlined"
        onChangeText={text => setUserName(text)}
        style={style.textInput}
      />
      <TextInput
        label="PassWord"
        secureTextEntry={true}
        value={passWord}
        mode="outlined"
        onChangeText={text => setPassWord(text)}
        style={style.textInput}
      />

      <Button
        mode="contained"
        onPress={async () => {
          if (userName === '' || passWord === '') {
            return setStatus('Write user and pass');
          } else {
            setStatus('');
            setLoading(true);
            await Login(userName, passWord, setStatus, setLoading);
          }
        }}
        style={style.button}
        loading={loading}>
        Login
      </Button>

      <Text>{status}</Text>

      <View style={style.singUpView}>
        <Text>Don't have an account? </Text>
        <Text
          onPress={() => {
            navigation.navigate('SingUpScreen');
          }}
          style={style.singUpText}>
          Sing Up
        </Text>
      </View>

      <Text style={style.marginTextTop}>Or</Text>

      <View style={style.singUpView}>
        <Text>Enter </Text>
        <Text
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
          style={style.textAnonimate}>
          without account
        </Text>
      </View>

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
  Imagelogo: {
    width: 100,
    height: 100,
  },
  textInput: {
    width: '70%',
    marginTop: 30,
    backgroundColor: '#fff',
  },
  button: {
    marginVertical: 20,
  },
  singUpView: {
    flexDirection: 'row',
  },
  singUpText: {
    color: '#560cce',
    fontWeight: 'bold',
  },
  marginTextTop: {
    marginTop: 10,
  },
  textAnonimate: {
    color: '#AAA',
  },
});
