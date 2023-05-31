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

export default function MainBoxes() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <NativeBaseProvider>
      <Heading size="md" ml="10">
        {" "}
        For You
      </Heading>
      <Text>ㅤ</Text>
      <Center>
        <Box
          maxW="400"
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
        >
          <HStack space={3}>
            <Center>
              <HStack space={1}>
                <Text>ㅤ</Text>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/477596753/photo/homemade-southern-fried-chicken.jpg?s=612x612&w=0&k=20&c=8b_5KjKmmO34ChsqVZN4-1YlDXyVJNlKh3w6qtVjR88=",
                  }}
                  alt="Alternate Text"
                  size="lg"
                />
              </HStack>
            </Center>
            <VStack space={1}>
              <Heading size="md" ml="-1">
                AYAM KFC
              </Heading>
              <VStack>
                <Text>Fried chicken, also known as</Text>
                <Text>Southern fried chicken, is a dish</Text>
                <Text>consisting of chicken pieces that</Text>
                <Text>have been coated with seasoned</Text>
                <Text>flour or batter and pan-fried chickenㅤ</Text>
                <Text>while retaining.....</Text>
              </VStack>
              <VStack>
                <HStack
                  alignItems="flex-end"
                  space={4}
                  justifyContent="flex-end"
                >
                  <HStack alignItems="flex-end">
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                      fontWeight="400"
                    >
                      ㅤTap to see moreㅤ
                    </Text>
                  </HStack>
                </HStack>
                <Text>ㅤ</Text>
              </VStack>
            </VStack>
          </HStack>
        </Box>
      </Center>

      <Heading size="md" ml="10">
        {" "}
        Trending now
      </Heading>
      <Text>ㅤ</Text>
      <Center>
        <Box
          maxW="400"
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
        >
          <HStack space={3}>
            <Center>
              <HStack space={1}>
                <Text>ㅤ</Text>
                <Image
                  source={{
                    uri: "https://media.istockphoto.com/id/477596753/photo/homemade-southern-fried-chicken.jpg?s=612x612&w=0&k=20&c=8b_5KjKmmO34ChsqVZN4-1YlDXyVJNlKh3w6qtVjR88=",
                  }}
                  alt="Alternate Text"
                  size="lg"
                />
              </HStack>
            </Center>
            <VStack space={1}>
              <Heading size="md" ml="-1">
                AYAM KFC
              </Heading>
              <VStack>
                <Text>Fried chicken, also known as</Text>
                <Text>Southern fried chicken, is a dish</Text>
                <Text>consisting of chicken pieces that</Text>
                <Text>have been coated with seasoned</Text>
                <Text>flour or batter and pan-fried chickenㅤ</Text>
                <Text>while retaining.....</Text>
              </VStack>
              <VStack>
                <HStack
                  alignItems="flex-end"
                  space={4}
                  justifyContent="flex-end"
                >
                  <HStack alignItems="flex-end">
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                      fontWeight="400"
                    >
                      ㅤTap to see moreㅤ
                    </Text>
                  </HStack>
                </HStack>
                <Text>ㅤ</Text>
              </VStack>
            </VStack>
          </HStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
}
