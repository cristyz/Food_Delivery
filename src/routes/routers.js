import React from 'react';

import AuthRouters from './authRouters';
import AppRouters from './appRouters';

import LoadingComponent from '../components/loadingComponent';

import {useAuth} from '../authContext/auth';

export default () => {
  const {auth} = useAuth();

  if (auth == null) {
    return <LoadingComponent />;
  }

  return auth ? <AppRouters /> : <AuthRouters />;
};
