import React from "react";
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";

import BasicInfo from "./BasicInfo/BasicInfo";
import AddScreen from "./CreateRecipes";
import Steps from "./Steps/steps1";

const Stack = createStackNavigator(); // creates object for Stack Navigator

const Create_BasicInfo = () => {
  return (
    <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Add Screen"
            component={AddScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Basic Information"
            component={BasicInfo}
            options={{
              headerTitle: "Basic Information                  1/3",
              // headerShown: false,
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="Steps"
            component={Steps}
            options={{
              headerTitle: "Steps                                        2/3",
              // headershown:false
            }}
          />
        </Stack.Group>
        {/* <Stack.Group> 
        
        <Stack.Screen
          name="Review"
          component={Review}
          options={{
            headerTitle: "Review                                       3/3"
            // headershown:false
          }}

          />
          
        </Stack.Group> */}
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export { Create_BasicInfo }; // Stack-Navigator for Screen 1 Tab
