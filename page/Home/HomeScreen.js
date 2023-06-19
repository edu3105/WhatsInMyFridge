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

export default function HomeScreen() {
  const [searchIngredients, setSearchIngredients] = useState("");

  return (
    <NativeBaseProvider>
      <ScrollView vertical={true}>
        <SearchBar setSearchIngredients={setSearchIngredients} />

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ScrollView horizontal={true} mx="5" mt="3" style={{ width: "90%" }}>
            <QuickFilter />
            <QuickFilter />
            <QuickFilter />
            <QuickFilter />
            <QuickFilter />
            <QuickFilter />
            <QuickFilter />
          </ScrollView>
        </View>

        <BigBox searchIngredients={searchIngredients} />

        <ScrollView horizontal={true}>
          <HStack space={2} overflow="scroll" px={10}>
            <Recipes />
            <Recipes />
            <Recipes />
            <Recipes />
          </HStack>
        </ScrollView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({});
