import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import {
  NativeBaseProvider,
  Box,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  HStack,
  ScrollView,
  Input,
  Pressable,
  Button,
  Flex,
} from "native-base";
import SearchBar from "./searchBar";
import QuickFilter from "./quickFilter";
import BigBox from "./IngredientsBox/bigBox";
import Recipes from "./Recipes";
import { getData } from "../api/Data/ingredientsData.js";
import recipeDB from "../../database/recipeDb.js";

export default function HomeScreen({ navigation }) {
  const [searchIngredients, setSearchIngredients] = useState("");
  const quickFilter = [
    "All",
    "Meat",
    "Seafood",
    "Vegetables",
    "Dairy",
    "Fruits",
    "Sauce",
    "Spices",
  ];
  const [ingredients, setIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // useEffect(() => {
  //   // Filter the recipeDB based on ingredients whenever it changes
  //   const canCookRecipes = recipeDB.filter((recipe) => {
  //     // Check if any ingredient in the recipe matches the user's ingredients
  //     return recipe.ingredients.some(
  //       (ingredient) => ingredients.name === ingredient.name
  //     );
  //   });

  //   console.log("filtered recipes:", canCookRecipes);
  //   // Update the state with the filtered recipes
  //   setFilteredRecipes(canCookRecipes);
  // }, [ingredients]);

  useEffect(() => {
    const canCookRecipes = recipeDB.filter((recipe) => {
      const matchingIngredients = ingredients.filter((userIngredient) =>
        recipe.ingredients.some(
          (recipeIngredient) => recipeIngredient.name === userIngredient.name
        )
      );

      // Log the matching ingredients
      matchingIngredients.forEach((ingredient) => {
        console.log("Matching Ingredient:", ingredient.name);
      });

      return matchingIngredients.length > 0;
    });

    console.log("Filtered Recipes:", canCookRecipes);

    setFilteredRecipes(canCookRecipes);
  }, [ingredients]);

  return (
    <NativeBaseProvider>
      <ScrollView vertical={true}>
        <SearchBar setSearchIngredients={setSearchIngredients} />

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ScrollView horizontal={true} mx="5" mt="3" style={{ width: "90%" }}>
            <QuickFilter Filtered={quickFilter[0]} />
            <QuickFilter Filtered={quickFilter[1]} />
            <QuickFilter Filtered={quickFilter[2]} />
            <QuickFilter Filtered={quickFilter[3]} />
            <QuickFilter Filtered={quickFilter[4]} />
            <QuickFilter Filtered={quickFilter[5]} />
            <QuickFilter Filtered={quickFilter[6]} />
            <QuickFilter Filtered={quickFilter[7]} />
          </ScrollView>
        </View>

        <BigBox
          searchIngredients={searchIngredients}
          ingredients={ingredients}
          setIngredients={setIngredients}
        />

        <ScrollView horizontal={true} pt={3} pb={4}>
          <HStack space={2} overflow="scroll" px={10}>
            <Recipes recipes={filteredRecipes} navigation={navigation} />
          </HStack>
        </ScrollView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({});
