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

export default function Creators() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <NativeBaseProvider>
      <Heading size="md" ml="6">
        Popular Creators
      </Heading>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        marginTop={3}
      >
        <HStack justifyContent="center" space={2} ml="6">
          <Avatar
            bg="green.500"
            size="lg"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          >
            AJ
          </Avatar>
          <Avatar
            bg="cyan.500"
            size="lg"
            source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            }}
          >
            TE
          </Avatar>

          <Avatar bg="green.500" mr="1" size="lg">
            JJ
          </Avatar>
          <Avatar bg="amber.500" size="lg">
            SAM
          </Avatar>

          <Avatar bg="lightBlue.400" size="lg">
            OWEN
          </Avatar>
          <Avatar bg="green.500" mr="1" size="lg">
            EDU
          </Avatar>
          <Avatar bg="amber.500" size="lg">
            LIX
          </Avatar>
          <Avatar bg="lightBlue.400" size="lg">
            DYL
          </Avatar>
        </HStack>
      </ScrollView>
      <Stack p="6" space={6}>
        <HStack
          alignItems="center"
          space={6}
          justifyContent="space-between"
        ></HStack>
      </Stack>
    </NativeBaseProvider>
  );
}
