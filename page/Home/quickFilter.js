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

const quickFilter = ({ Filtered }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Box alignItems="center" mx="0.5">
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
              {Filtered}
            </Box>
          );
        }}
      </Pressable>
    </Box>
  );
};

export default quickFilter;
