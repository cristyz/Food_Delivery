import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// Pages
import Routers from './routes/routers';

// Context
import {AuthProvider} from './authContext/auth';

function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routers />
      </AuthProvider>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
    </NavigationContainer>
  );
}

export default App;
