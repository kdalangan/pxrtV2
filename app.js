import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import LoginScreen from '../app/login';
import SignUpScreen from '../app/signup';
import Dashboard from '../app/dashboard';
import ResultScreen from '../app/result';

const Stack = createNativeStackNavigator();

export default function App() {
  // Load the custom fonts
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  });

  // If fonts are not loaded yet, show a loading screen
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="signup" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="dashboard" component={Dashboard} options={{ headerShown: false }} />
        <Stack.Screen name="result" component={ResultScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}