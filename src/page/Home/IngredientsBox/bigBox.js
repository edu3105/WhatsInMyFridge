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
import Ingredients from "./ingredients.js";
import AddButton from "./addButton.js";

const bigBox = () => {
  const { height } = Dimensions.get("window");

  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ScrollView
          nestedScrollEnabled={true}
          vertical={true}
          style={{ flexDirection: "column" }}
          bg="coolGray.300"
          mx="5"
          mt="3"
          w="80%"
          h={height * 0.5}
        >
          <Ingredients />
          <Ingredients />
          <Ingredients />
          <Ingredients />
          <Ingredients />
          <Ingredients />
          <Ingredients />
          <Ingredients />
          <Ingredients />
          <Ingredients />
          <Ingredients />
          <Ingredients />
          <Ingredients />
          <Ingredients />
          <Ingredients />
        </ScrollView>
      </View>

      <AddButton />
    </NativeBaseProvider>
  );
};

export default bigBox;
