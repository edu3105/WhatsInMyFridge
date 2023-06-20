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
import { loadFonts } from "../../../fonts.js";
import { getData } from "../../api/Data/ingredientsData.js";

const bigBox = ({ searchIngredients, ingredients, setIngredients }) => {
  const { height } = Dimensions.get("window");

  // const [ingredients, setIngredients] = useState([]); // State for ingredients

  const [fontLoaded, setFontLoaded] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getData(); // Fetch all the data
      setIngredients(allData);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const loadCustomFonts = async () => {
      await loadFonts();
      setFontLoaded(true);
    };

    loadCustomFonts();
  }, []);

  if (!fontLoaded) {
    return <View />; // Render an empty view while the font is loading
  }

  if (isLoading) {
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
              <Text style={{ fontFamily: "Poppins-Medium", opacity: 0.7 }}>
                OPENING YOUR FRIDGE..
              </Text>
            </VStack>
          </Center>
          <AddButton setIngredients={setIngredients} />
        </View>
      </NativeBaseProvider>
    ); // Render a loading state while data is being fetched
  }

  if (ingredients.length === 0 && searchIngredients.length != 0) {
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
                You Don't have that Ingredients Right Now
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
