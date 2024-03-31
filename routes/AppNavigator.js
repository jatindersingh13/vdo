import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import VideoPlayer from '../screens/VideoPlayer/VideoPlayer';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}> 
      <Stack.Screen name="HomeScreen" component={HomeScreen} /> 

    </Stack.Navigator>
  );
};

export default AppNavigator;