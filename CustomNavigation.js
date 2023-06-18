//CustomNavigation.js

import React from "react";
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
// import NestedSettings from "./page/Settings/NestedSettings.js";
// import SettingsScreen from "./page/Settings/SettingsSettings.js";

import NestedSettings from "./page/Settings/NestedSettings";
import SettingsScreen from "./page/Settings/Settings";
import ExploreScreen from "./page/Explore/ExploreScreen";
import ExploreRegionScreen from "./page/ExploreRegion/ExploreRegionScreen";
import ExploreRatingScreen from "./page/ExploreRating/ExploreRatingScreen";
import RecipeScreen from "./page/RecipePage/RecipeScreen";

const Stack = createStackNavigator(); // creates object for Stack Navigator

const FirstScreenNavigator = () => {
  return (
    <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Settings 2"
            component={SettingsScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="NestedScreen1" component={NestedSettings} />
        </Stack.Group>
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export { FirstScreenNavigator }; // Stack-Navigator for Screen 1 Tab

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

const ExploreScreenNavigator = () => {
  return (
    <NativeBaseProvider>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
      >
        <Tab.Screen
          name="ForYou"
          component={ExploreScreen}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" }, // Hide the tab bar for this screen
          }}
        />

        <Tab.Screen
          name="Region"
          component={ExploreRegionScreen}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" }, // Hide the tab bar for this screen
          }}
        />

        <Tab.Screen
          name="Rating"
          component={ExploreRatingScreen}
          options={{
            headerShown: false,
            tabBarStyle: { display: "none" }, // Hide the tab bar for this screen
          }}
        />
      </Tab.Navigator>
    </NativeBaseProvider>
  );
};

export { ExploreScreenNavigator };

const ExploretoRecipe = () => {
  return (
    <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Test"
            component={ExploreScreenNavigator}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="RecipePage" component={RecipeScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export { ExploretoRecipe }; // Stack-Navigator for Screen 1 Tab
