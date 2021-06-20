import React from 'react';

import AuthRouters from './authRouters';
import AppRouters from './appRouters';

import {useAuth} from '../authContext/auth';

export default () => {
  const {auth} = useAuth();

  return auth ? <AppRouters /> : <AuthRouters />;
};
