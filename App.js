import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingPage from './components/pages/LandingPage';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import HomePage from './components/pages/HomePage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Welcome In" component={LandingPage} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomePage" component={HomePage} />
        {/* Autres écrans ici */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
