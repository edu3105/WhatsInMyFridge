import React from "react";
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";

import BasicInfo from "./BasicInfo/BasicInfo";
import AddScreen from "./CreateRecipes";

const Stack = createStackNavigator(); // creates object for Stack Navigator

const Create_BasicInfo = () => {
  return (
    <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Basic Information 1"
          component={AddScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Basic Information"
          component={BasicInfo}
          options={{
            headerTitle: "Basic Information                      1/3",
            // headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export { Create_BasicInfo }; // Stack-Navigator for Screen 1 Tab
