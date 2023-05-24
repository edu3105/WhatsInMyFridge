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

const addButton = () => {
  const handleExplorePress = () => {
    navigation.navigate('ExploreStack'); // Navigate to the ExploreScreen component
  };
  
  return (
    <NativeBaseProvider>
      <Box alignItems="center" mt="3">
        <Button colorScheme="secondary" onPress={handleExplorePress}>Add Ingredients</Button>
      </Box>
    </NativeBaseProvider>
  );
};
  
  export default addButton;