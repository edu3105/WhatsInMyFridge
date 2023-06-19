//CustomNavigation.js

import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { NativeBaseProvider, View, Text } from "native-base";
import { createStackNavigator } from "@react-navigation/stack";
// import NestedSettings from "./page/Settings/NestedSettings.js";
// import SettingsScreen from "./page/Settings/SettingsSettings.js";

import NestedSettings from "./page/Settings/NestedSettings";
import SettingsScreen from "./page/Settings/Settings";
import ExploreScreen from "./page/Explore/ExploreScreen";
import ExploreRegionScreen from "./page/ExploreRegion/ExploreRegionScreen";
import ExploreRatingScreen from "./page/ExploreRating/ExploreRatingScreen";
import RecipeScreen from "./page/RecipePage/RecipeScreen";
import RecipeSteps from "./page/RecipePage/RecipeSteps";
import RecipeDone from "./page/RecipePage/RecipeDone";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import {
  FontAwesome,
  FontAwesomeIcon,
} from "@fortawesome/react-native-fontawesome";
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
        // tabBarOptions={{
        //   showLabel: false,
        // }}

        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: [{
            display: "flex",
          }, null]
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
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleBookmarkPress = () => {
    setIsBookmarked(!isBookmarked);
  };
  const headerTitleComponent = (props) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text
        {...props}
        style={{
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Cheeseburger
      </Text>
      <TouchableOpacity
        onPress={handleBookmarkPress}
        style={{
          position: "absolute",
          left: 220,
        }}
      >
        <FontAwesomeIcon
          icon={faBookmark}
          size={24}
          color={isBookmarked ? "orange" : "black"}
        />
      </TouchableOpacity>
    </View>
  );
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
          <Stack.Screen
            name="RecipePage"
            component={RecipeScreen}
            options={{
              headerTitle: headerTitleComponent,
              headerTitleAlign: "center",
            }}
          />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen
            name="RecipeSteps"
            component={RecipeSteps}
            options={{
              headerTitle: "Cheeseburger",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="RecipeDone"
            component={RecipeDone}
            options={{
              headerTitle: "Cheeseburger",
              headerTitleAlign: "center",
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NativeBaseProvider>
  );
};

export { ExploretoRecipe }; // Stack-Navigator for Screen 1 Tab
