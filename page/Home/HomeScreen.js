import { React, useState } from "react";
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
import IngredientsBox from "./quickFilter";
import BigBox from "./IngredientsBox/bigBox";
import Recipes from "./Recipes";

export default function HomeScreen() {
  return (
    <NativeBaseProvider>
      <ScrollView vertical={true}>
        <SearchBar />

        <IngredientsBox />

        <BigBox />

        <ScrollView horizontal={true}>
          <Recipes />
        </ScrollView>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const style = StyleSheet.create({});
