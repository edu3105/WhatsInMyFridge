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
import Ingredients from "./ingredients.js";
import AddButton from "./addButton.js";

const bigBox = ({ searchIngredients }) => {
  const { height } = Dimensions.get("window");

  const [ingredients, setIngredients] = useState([]); // State for ingredients

  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ScrollView
          nestedScrollEnabled={true}
          vertical={true}
          style={{ flexDirection: "column" }}
          bg="gray.100"
          mx="5"
          mt="3"
          w="100%"
          h={height * 0.5}
        >
          <Ingredients
            ingredients={ingredients}
            setIngredients={setIngredients}
            searchIngredients={searchIngredients}
          />
        </ScrollView>
      </View>
      <AddButton setIngredients={setIngredients} />
    </NativeBaseProvider>
  );
};

export default bigBox;
