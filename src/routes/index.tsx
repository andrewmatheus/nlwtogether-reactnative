import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Background } from '../../src/components/Background';

import { AuthRoutes } from './auth.routes';

export function Routes() {
  return(    
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>    
  )
}