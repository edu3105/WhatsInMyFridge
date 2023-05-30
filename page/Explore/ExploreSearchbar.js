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

export default function SearchBar() {
    return (
        <NativeBaseProvider>
            <ScrollView vertical={true}>
                <Box alignItems="center" mt="4">
                    <Input variant="rounded" mx="3" placeholder="Explore Recipes" w="80%" />
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}