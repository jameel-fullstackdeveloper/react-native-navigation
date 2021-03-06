import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const SignInScreen = ({onSignIn}) => {
  return (
    <View style={styles.container}>
      <Text>Public Sign In Screen</Text>
      <Button title="Sign In" onPress={onSignIn} />
      
    </View>
  );
};
 
export default SignInScreen;