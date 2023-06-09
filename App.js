//app,js

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import { NativeBaseProvider, Box } from "native-base";

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeNavigator from "./page/Home/homeNavigator.js";
// import SettingsScreen from "./page/Settings.js";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import ExploreScreen from "./page/Explore/ExploreScreen.js";
import { FirstScreenNavigator } from "./CustomNavigation.js";
import { ExploreScreenNavigator } from "./CustomNavigation.js";
import { Create_BasicInfo } from "./page/Create/Custom1.js";
import BookmarkScreen from "./page/Bookmark/BookmarkScreen.js";
import RegisterScreen from "./page/register/RegisterScreen.js";

import { FirstScreenNavigatorSettings } from "./page/Settings/SettingsNavigation.js";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ExploretoRecipe } from "./CustomNavigation.js";
import SplashScreen from "./page/register/SplashScreen.js";
import LoginScreen from "./page/register/LoginScreen.js";

import { firebase } from "./config.js";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
console.disableYellowBox = true;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60, // Set the height of the tab bar here
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
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
        component={ExploretoRecipe}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            height: 60,
          },
          headerShown: getHeaderVisibility(route),
          tabBarLabel: " ",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={30} // Set the size of the icon here
              focused={focused}
              marginBottom={-15}
            />
          ),
        })}
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
        name="Profile"
        component={FirstScreenNavigatorSettings}
        key={true}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route),
            height: 60,
          },
          //dont show
          headerShown: getHeaderVisibility(route),
          tabBarLabel: " ",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={30} // Set the size of the icon here
              focused={focused}
              marginBottom={-15}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

function AuthToApp() {
  const [initializing, setinitIalizing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setinitIalizing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            // options={}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Group>
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="App"
        component={App}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <AuthToApp />
    </NavigationContainer>
  );
};

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  if (
    routeName == "Settings" ||
    routeName == "Basic Information" ||
    routeName == "Edit Profile" ||
    routeName == "Change Password" ||
    routeName == "FAQ" ||
    routeName == "About Us" ||
    routeName == "Steps" ||
    routeName == "RecipePage" ||
    routeName == "RecipeSteps" ||
    routeName == "RecipeDone" ||
    routeName == "StepByStepMode" ||
    routeName == "Review" ||
    routeName == "Done" ||
    routeName == "RegionPage"
  ) {
    return "none";
  } else {
    return "flex";
  }
};

const getHeaderVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  if (
    routeName == "Settings" ||
    routeName == "Basic Information" ||
    routeName == "Edit Profile" ||
    routeName == "Change Password" ||
    routeName == "FAQ" ||
    routeName == "About Us" ||
    routeName == "Steps" ||
    routeName == "Stats" ||
    routeName == "RecipePage" ||
    routeName == "RecipeSteps" ||
    routeName == "RecipeDone" ||
    routeName == "StepByStepMode" ||
    routeName == "Review" ||
    routeName == "Done" ||
    routeName == "RegionPage"
  ) {
    return false;
  }
};
