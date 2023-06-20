import React, { useState } from "react";
import { NativeBaseProvider, View, Text } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
import uRecipeScreen from "./uRecipeScreen";
import uRecipeSteps from "./uRecipeSteps";
//import uRecipeBox from "./uRecipeBox";
import uRecipeDone from "./uRecipeDone";

const Stack = createStackNavigator(); // creates object for Stack Navigator

const ExploretoUpload = () => {
  return (
    <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="uRecipeScreen"
            component={uRecipeScreen}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="uRecipeSteps"
            component={uRecipeSteps}
          />
          <Stack.Screen
            name="uRecipeDone"
            component={uRecipeDone}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export { ExploretoUpload }; // Stack-Navigator for Screen 1 Tab
