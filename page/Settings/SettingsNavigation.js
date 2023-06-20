//CustomNavigation.js

import React from "react";
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";

import NestedSettings from "./NestedSettings";

import SettingsScreen from "./Settings";

import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";
import FAQ from "./FAQ";
import AboutUs from "./AboutUs";
import Stat_s from "./Stats";

const Stack = createStackNavigator(); // creates object for Stack Navigator

const FirstScreenNavigatorSettings = () => {
  return (
    <NativeBaseProvider>
      <Stack.Navigator screenOptions={{ animation: "slide_from_left" }}>
        <Stack.Group>
          <Stack.Screen
            name="ProfilePage"
            component={SettingsScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Settings" component={NestedSettings} />
        </Stack.Group>

        <Stack.Group>
          <Stack.Screen name="Edit Profile" component={EditProfile} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Change Password" component={ChangePassword} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="FAQ" component={FAQ} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="About Us" component={AboutUs} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="Stats" component={Stat_s} />
        </Stack.Group>
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export { FirstScreenNavigatorSettings }; // Stack-Navigator for Screen 1 Tab
