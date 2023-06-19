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
  VStack,
} from "native-base";
import Ingredients from "./ingredients.js";
import AddButton from "./addButton.js";

const bigBox = ({ searchIngredients }) => {
  const { height } = Dimensions.get("window");

  const [ingredients, setIngredients] = useState([]); // State for ingredients

  if (ingredients.length === 0) {
    return (
      <NativeBaseProvider>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Center
            flex={1}
            h={height * 0.5}
            borderRadius={10}
            bg="gray.100"
            w="90%"
          >
            <VStack justifyContent="center" alignItems="center">
              <Image
                source={require("../../../assets/fridge/sad_Fridge.png")} // Replace with the path to your image
                alt="Fridge Image"
                w={100}
                h={110}
                mb={4}
                style={{ opacity: 0.7 }}
              />
              <Text style={{ fontFamily: "Poppins-Medium", opacity: 0.7 }}>
                Your Fridge is Empty, Let's Add new Ingredients
              </Text>
            </VStack>
          </Center>
          <AddButton setIngredients={setIngredients} />
        </View>
      </NativeBaseProvider>
    );
  }

  return (
    <NativeBaseProvider>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ScrollView
          nestedScrollEnabled={true}
          vertical={true}
          style={{ flexDirection: "column" }}
          bg="gray.200"
          mx="5"
          mt="3"
          w="90%"
          borderRadius={10}
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
