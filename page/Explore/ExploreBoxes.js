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
  Container,
  Pressable,
  Button,
  TouchableOpacity,
  Avatar,
  Flex,
  VStack,
} from "native-base";
import { extendTheme } from "native-base";

const theme = extendTheme({
  components: {
    VStack: {
      baseStyle: {
        space: -3,
      },
    },
  },
});

title = "Cheeseburger";

function addLineBreaks(text) {
  const words = text.split(" ");
  const wordsWithBreaks = [];

  for (let i = 0; i < words.length; i += 5) {
    const chunk = words.slice(i, i + 5);
    wordsWithBreaks.push(chunk.join(" "));
  }

  return wordsWithBreaks.join("\n");
}

const body =
  "A cheeseburger is a hamburger with a slice of melted cheese on top of the meat patty, added near the end of the cooking time";

const bodyWithLineBreaks = addLineBreaks(body);

export default function MainBoxes({ navigation }) {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <NativeBaseProvider>
      <VStack space={2} marginLeft={6}>
        <Heading size="md">For You</Heading>

        <Pressable onPress={() => navigation.navigate("RecipePage")}>
          <Box
            maxW="380"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="2"
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
          >
            <HStack space={5}>
              <Center>
                <HStack space={0} marginTop={4}>
                  <Text>ㅤ</Text>
                  <Image
                    rounded="md"
                    source={{
                      uri: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/juicy-cheeseburger-pack-cea71279.jpg",
                    }}
                    alt="Alternate Text"
                    size="xl"
                  />
                  <Text>ㅤ</Text>
                  <VStack space={0}>
                    <Heading size="md">{title}</Heading>
                    <Text>{bodyWithLineBreaks}</Text>
                    <Text marginTop={3}>ㅤㅤㅤㅤㅤㅤㅤㅤㅤTap to see more</Text>
                  </VStack>
                </HStack>
              </Center>
            </HStack>
            <Text>ㅤ</Text>
          </Box>
        </Pressable>
      </VStack>
      <Text>ㅤ</Text>

      <VStack space={2} marginLeft={6}>
        <Heading size="md">Trending</Heading>
        <Box
          maxW="380"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="2"
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
        >
          <HStack space={5}>
            <Center>
              <HStack space={0} marginTop={4}>
                <Text>ㅤ</Text>
                <Image
                  rounded="md"
                  source={{
                    uri: "https://media.istockphoto.com/id/477596753/photo/homemade-southern-fried-chicken.jpg?s=612x612&w=0&k=20&c=8b_5KjKmmO34ChsqVZN4-1YlDXyVJNlKh3w6qtVjR88=",
                  }}
                  alt="Alternate Text"
                  size="xl"
                />
                <Text>ㅤ</Text>
                <VStack space={0}>
                  <Heading size="md">{title}</Heading>
                  <Text>{bodyWithLineBreaks}</Text>
                  <Text marginTop={3}>ㅤㅤㅤㅤㅤㅤㅤㅤㅤTap to see more</Text>
                </VStack>
              </HStack>
            </Center>
          </HStack>
          <Text>ㅤ</Text>
        </Box>
      </VStack>
      <Text>ㅤ</Text>
    </NativeBaseProvider>
  );
}
