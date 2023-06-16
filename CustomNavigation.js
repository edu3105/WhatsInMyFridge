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
const ExploreScreenNavigator = () => {
  return (
    <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="ForYou"
            component={ExploreScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name="Region"
            component={ExploreRegionScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen
            name="Rating"
            component={ExploreRatingScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export { ExploreScreenNavigator }; // Stack-Navigator for Screen 1 Tab
