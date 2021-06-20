import React, {createContext, useState, useContext, useEffect} from 'react';

import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState('');
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    async function authVerification() {
      const token = await AsyncStorage.getItem('token');

      if (token) {
        setAuth(true);
      }
    }

    authVerification();
  }, []);

  async function Login(name, password, setStatus, setLoading) {
    return new Promise((resolve, reject) => {
      axios
        .post('http://192.168.1.6:8787/login', {name, password})
        .then(res => {
          setLoading(false);
          const data = res.data;
          setStatus(data.status);
          if (data.status === 'Success') {
            setUser(data.userName);
            setAuth(true);
            AsyncStorage.setItem('token', 'fewufewi');
          }
          resolve();
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  async function SingOut() {
    await AsyncStorage.clear();
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{auth, token: '', user, Login, SingOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
