/* eslint-disable linebreak-style */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthenticationHelp from '../screens/Authentication/AuthenticationHelp';
import SignIn from '../screens/Authentication/SignIn';
import SignUp from '../screens/Authentication/SignUp';
import { AuthenticationParamList } from '../typescript/types/navigation';

const AuthenticationNav = createNativeStackNavigator<AuthenticationParamList>();

function AuthenticationNavigation() {
  return (
    <AuthenticationNav.Navigator>
      <AuthenticationNav.Screen name="SignIn" component={SignIn} />
      <AuthenticationNav.Screen name="SignUp" component={SignUp} />
      <AuthenticationNav.Screen
        name="AuthenticationHelp"
        component={AuthenticationHelp}
      />
    </AuthenticationNav.Navigator>
  );
}

export default AuthenticationNavigation;
