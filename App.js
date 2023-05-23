// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NativeBaseProvider, Box } from "native-base";

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './page/HomeScreen.js';
import SettingsScreen from './page/Settings.js';
import ExploreScreen from './page/ExploreScreen.js'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 60, // Set the height of the tab bar here
          },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{ 
            tabBarBadge: 5,
            tabBarLabel: ' ',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={30} // Set the size of the icon here
                focused={focused}
                marginBottom={-15}
              />
            ),
          }} 
        />
        <Tab.Screen name="Explore" component={ExploreScreen} 
          options={{ 
            tabBarBadge: 5,
            tabBarLabel: ' ',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? 'search' : 'search-outline'}
                size={30} // Set the size of the icon here
                focused={focused}
                marginBottom={-15}
              />
            ),
          }} 
        />
        <Tab.Screen name="Settings" component={SettingsScreen}
          options={{ 
            tabBarLabel: ' ',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? 'settings' : 'settings-outline'}
                size={30} // Set the size of the icon here
                focused={focused}
                marginBottom={-15}
              />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
