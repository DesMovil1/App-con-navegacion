import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login'; 
import  SecondNav  from './SecondNav';
const Stack = createNativeStackNavigator();

const FirstNav = () => {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="SecondNav" component={SecondNav} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
    
  );
};

export default FirstNav;
