import React,  { useState }from 'react';
import { NavigationContainer,getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LandingScreen from './src/screens/Landing';
import HomeScreen from './src/screens/Home';
import SignInScreen from './src/screens/SignIn';

import { Button } from 'react-native';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const HomeDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="Landing"
        component={LandingScreen}
      />
    </Drawer.Navigator>
  );
};


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
            component={HomeDrawer} 
            options={({ route }) => ({
              headerTitle: getFocusedRouteNameFromRoute(route),
              headerRight: () => (
                <Button onPress={handleSignOut} title="Sign Out" />
              ),
             })}
            />
        ) : (
          <>
          <RootStack.Screen
              name="Landing" 
              component={LandingScreen} 
              options={{
                animationTypeForReplace: 'pop',
              }}
              />

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

