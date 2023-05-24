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
import Ingredients from './ingredients.js';
import AddButton from './addButton.js';

const bigBox = () => {
    return (
      <NativeBaseProvider>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Ingredients />
        </View>

        <AddButton />
      </NativeBaseProvider>
    );
  };
  
  export default bigBox;