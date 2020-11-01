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
  