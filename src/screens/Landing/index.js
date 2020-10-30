import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
const LandingScreen = ({ navigation })  => {
  return (
    <View style={styles.container}>
      <Text>Public Landing Screen</Text>
      <Button 
        title ="SignIn"
        onPress = { ()=> navigation.navigate('SignIn')}
      />
      
    </View>
  );
};
 
export default LandingScreen;