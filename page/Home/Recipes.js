import React from "react";
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
  Text,
} from "native-base";

const Recipes = ({ recipes, navigation }) => {
  const handleBoxPress = (recipe) => {
    // Handle the press event here
    navigation.navigate("RecipePage");
  };

  return (
    <NativeBaseProvider>
      <ScrollView horizontal={true}>
        <HStack space={2} overflow="scroll" px={10}>
          {recipes.map((recipe, index) => (
            <Pressable key={index} onPress={() => handleBoxPress(recipe)}>
              {({ isPressed }) => (
                <Box
                  maxW="40"
                  h={250} // Fixed height
                  rounded="lg"
                  overflow="hidden"
                  borderColor="coolGray.200"
                  borderWidth="1"
                  _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700",
                  }}
                  _web={{
                    shadow: 2,
                    borderWidth: 0,
                  }}
                  _light={{
                    backgroundColor: "gray.50",
                  }}
                  opacity={isPressed ? 0.8 : 1} // Optionally, change the opacity when pressed
                >
                  <Box>
                    <AspectRatio w="100%" ratio={1 / 1}>
                      <Image
                        source={{ uri: recipe.image }}
                        alt="Recipe Image"
                      />
                    </AspectRatio>
                  </Box>
                  <Center p={2}>
                    <Heading size="sm" textAlign="center">
                      {recipe.recipeName}
                    </Heading>
                    <Text fontSize="sm" color="gray.500" textAlign="center">
                      {recipe.creator}
                    </Text>
                  </Center>
                </Box>
              )}
            </Pressable>
          ))}
        </HStack>
      </ScrollView>
    </NativeBaseProvider>
  );
};

export default Recipes;
