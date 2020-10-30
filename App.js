import React,  { useState }from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './src/screens/Landing';
import HomeScreen from './src/screens/Home';
import SignInScreen from './src/screens/SignIn';

import { Text, Button } from 'react-native';
 
const RootStack = createStackNavigator();

const App = () => {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    // TODO implement real sign out mechanism
 
    setIsAuthenticated(false);
  };

  return (
    <NavigationContainer>
    <RootStack.Navigator>
        
        {isAuthenticated ? (
          <RootStack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              headerRight: () => (
                <Button onPress={handleSignOut} title="Sign Out" />
              ),
             }}
            />
        ) : (
          <>
          <RootStack.Screen
              name="Landing" 
              component={LandingScreen} />

          <RootStack.Screen 
            name="SignIn">
            {(props) => (
              <SignInScreen {...props} onSignIn={handleSignIn} />
            )}
          </RootStack.Screen>
        </>
        )}

   </RootStack.Navigator>
  </NavigationContainer>
  );
};

export default App;

