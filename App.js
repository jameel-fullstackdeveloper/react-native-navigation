import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './src/screens/Landing';
import HomeScreen from './src/screens/Home';
import SignScreen from './src/screens/SignIn';
 
const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen name="Landing" component={LandingScreen} />
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="SignIn" component={SignScreen} />
      
    </RootStack.Navigator>
  </NavigationContainer>
  );
};

export default App;

