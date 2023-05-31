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
  TouchableOpacity,
  Avatar,
} from "native-base";

export default function FilterBar() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <NativeBaseProvider>
      <Center>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ScrollView horizontal={true} mx="5" mt="3" style={{ width: "90%" }}>
            <Box alignItems="center">
              <Pressable maxW="96" onPress={() => setIsClicked(!isClicked)}>
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      bg={
                        isPressed
                          ? "coolGray.200"
                          : isHovered || isClicked
                          ? "coolGray.200"
                          : "coolGray.100"
                      }
                      style={{
                        transform: [{ scale: isPressed ? 0.96 : 1 }],
                      }}
                      p="2"
                      rounded="8"
                      shadow={3}
                      borderWidth="1"
                      borderColor="coolGray.300"
                      justifyContent="center"
                      alignItems="center"
                      w="90"
                    >
                      For You
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
            <Box alignItems="center">
              <Pressable maxW="96" onPress={() => setIsClicked(!isClicked)}>
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      bg={
                        isPressed
                          ? "coolGray.200"
                          : isHovered || isClicked
                          ? "coolGray.200"
                          : "coolGray.100"
                      }
                      style={{
                        transform: [{ scale: isPressed ? 0.96 : 1 }],
                      }}
                      p="2"
                      rounded="8"
                      shadow={3}
                      borderWidth="1"
                      borderColor="coolGray.300"
                      justifyContent="center"
                      alignItems="center"
                      w="90"
                    >
                      Region
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
            <Box alignItems="center">
              <Pressable maxW="96" onPress={() => setIsClicked(!isClicked)}>
                {({ isHovered, isFocused, isPressed }) => {
                  return (
                    <Box
                      bg={
                        isPressed
                          ? "coolGray.200"
                          : isHovered || isClicked
                          ? "coolGray.200"
                          : "coolGray.100"
                      }
                      style={{
                        transform: [{ scale: isPressed ? 0.96 : 1 }],
                      }}
                      p="2"
                      rounded="8"
                      shadow={3}
                      borderWidth="1"
                      borderColor="coolGray.300"
                      justifyContent="center"
                      alignItems="center"
                      w="90"
                    >
                      Rating
                    </Box>
                  );
                }}
              </Pressable>
            </Box>
          </ScrollView>
        </View>
      </Center>
    </NativeBaseProvider>
  );
}
