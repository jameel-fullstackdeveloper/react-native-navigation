import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const SignInScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Public Sign In Screen</Text>
      <Button 
        title ="Home"
        onPress = { ()=> navigation.navigate('Home')}
      />
     
    </View>
  );
};
 
export default SignInScreen;