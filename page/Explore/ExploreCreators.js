import {React, useState} from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native';
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
    Avatar
  } from "native-base";

export default function Creators() {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <NativeBaseProvider>
            <Heading size="md" ml="10"> Popular Creators </Heading>
            <Stack p="3" space={3}>
              <HStack alignItems="center" space={3} justifyContent="space-between" > 
              </HStack>
            </Stack>
            <ScrollView horizontal={true}>
            <HStack justifyContent="center" space={2} ml="10">
              <Avatar bg="green.500" size="lg" source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }}>
                AJ
              </Avatar>
              <Avatar bg="cyan.500" size="lg" source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }}>
                TE
              </Avatar>
              <Avatar bg="indigo.500" size="lg" source={{
              uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            }}>
                JB
              </Avatar>
              <Avatar bg="amber.500" size="lg" source={{
              uri: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }}>
                TS
              </Avatar>
              <Avatar bg="green.500" mr="1" size="lg" source={{
                uri: "https://bit.ly/broken-link"
              }}>
                  JJ
                </Avatar>
                <Avatar bg="amber.500" size="lg" source={{
                uri: "https://bit.ly/broken-link"
              }}>
                  DILLON
                </Avatar>
                <Avatar bg="lightBlue.400" size="lg" source={{
                uri: "https://bit.ly/broken-link"
              }}>
                  BROOKS
                </Avatar>
                <Avatar bg="green.500" mr="1" size="lg" source={{
                uri: "https://bit.ly/broken-link"
              }}>
                  RS
                </Avatar>
                <Avatar bg="amber.500" size="lg" source={{
                uri: "https://bit.ly/broken-link"
              }}>
                  MR
                </Avatar>
                <Avatar bg="lightBlue.400" size="lg" source={{
                uri: "https://bit.ly/broken-link"
              }}>
                  --
                </Avatar>
            </HStack>
            </ScrollView>
            <Stack p="6" space={6}>
              <HStack alignItems="center" space={6} justifyContent="space-between">
              </HStack>
            </Stack>
        </NativeBaseProvider>
    )
}