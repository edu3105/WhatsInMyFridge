//Custom1.js
import React from "react";
import { NativeBaseProvider } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
// import BasicInfo from "./BasicInfo/BasicInfo";
// import AddScreen from "./CreateRecipes";
// import Steps from "./Steps/steps1";
// import Review from "./Review/Review";
// import StepByStepMode from "./StepByStepMode/Carousel";
// import Done from "./Done/Done";
// import { firebase } from "../../config";
import Home from "./HomeScreen.js";
import RecipeScreen from "../RecipePage/RecipeScreen.js";

const Stack = createStackNavigator(); // creates object for Stack Navigator

const HomeNavigator = () => {
  return (
    <NativeBaseProvider>
      <Stack.Navigator>
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Recipes Page" component={RecipeScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export default HomeNavigator; // Stack-Navigator for Screen 1 Tab
