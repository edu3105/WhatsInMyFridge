//app,js

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NativeBaseProvider, Box } from "native-base";

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./page/Home/HomeScreen.js";
// import SettingsScreen from "./page/Settings.js";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import ExploreScreen from "./page/Explore/ExploreScreen.js";
import { FirstScreenNavigator } from "./CustomNavigation.js";
import { Create_BasicInfo } from "./page/Create/Custom1.js";
import BookmarkScreen from "./page/Bookmark/BookmarkScreen.js";


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
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarBadge: 5,
            tabBarLabel: " ",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={30} // Set the size of the icon here
                focused={focused}
                marginBottom={-15}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            tabBarBadge: 5,
            tabBarLabel: " ",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "search" : "search-outline"}
                size={30} // Set the size of the icon here
                focused={focused}
                marginBottom={-15}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Create"
          component={Create_BasicInfo}
          options={({ route }) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route),
              height: 60,
            },
            //dont show header
            headerShown: getHeaderVisibility(route),
            tabBarLabel: " ",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "add-circle" : "add-circle-outline"}
                size={30} // Set the size of the icon here
                focused={focused}
                marginBottom={-15}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Bookmark"
          component={BookmarkScreen}
          options={{
            // tabBarBadge: 0,
            tabBarLabel: " ",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "bookmark" : "bookmark-outline"}
                size={30} // Set the size of the icon here
                focused={focused}
                marginBottom={-15}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={FirstScreenNavigator}
          options={({ route }) => ({
            tabBarStyle: {
              display: getTabBarVisibility(route),
              height: 60,
            },
            //dont show header
            headerShown: getHeaderVisibility(route),
            tabBarLabel: " ",
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={30} // Set the size of the icon here
                focused={focused}
                marginBottom={-15}
              />
            ),
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  if (routeName == "NestedScreen1" || routeName == "Basic Information") {
    return "none";
  } else {
    return "flex";
  }
};

const getHeaderVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  if (routeName == "NestedScreen1" || routeName == "Basic Information") {
    return false;
  }
};
