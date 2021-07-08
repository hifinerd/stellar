import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StarmapScreen from './screens/starmap.js'
import DailypicScreen from './screens/dailypic.js'
import SpacecraftScreen from './screens/spacecraft.js'
import HomeScreen from './screens/home.js'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

//Stack navigator to navigate between screens
function App() {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Spacecraft" component={SpacecraftScreen}/>
          <Stack.Screen name="Starmap" component={StarmapScreen}/>
          <Stack.Screen name="Dailypic" component={DailypicScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}