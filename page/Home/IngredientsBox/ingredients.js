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
  Flex
} from "native-base";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ingredients = () => {
    const { height } = Dimensions.get('window');

    return (
      <NativeBaseProvider>
        <ScrollView nestedScrollEnabled={true} vertical={true} style={{ flexDirection: "column" }} bg="coolGray.300" mx="5" mt="3" w="100%" h={height * 0.5}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <Box
            key="item"
            alignSelf="center"
            bg={["red.400", "blue.400"]}
                w="90%"
                my="1"
                borderRadius={8}
            >
            <Flex direction='row' mb="2.5" mt="1.5" w="100%" justifyContent="center">
                <Center mr="1" height="8" width="48" bg="primary.100" _text={{
                color: "coolGray.800"
                }}>
                100
                </Center>
                <Center height="8" width="16" bg="primary.200" _text={{
                color: "coolGray.800"
                }}>
                    {item}
                </Center>
            </Flex>
            </Box>
            ))}
        </ScrollView>
      </NativeBaseProvider>
    );
  };
  
  export default ingredients;