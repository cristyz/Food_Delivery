import 'react-native-gesture-handler';
import React from 'react';
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
    </NavigationContainer>
  );
}

export default App;
