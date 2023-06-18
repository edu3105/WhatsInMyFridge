import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import {
  NativeBaseProvider,
  HStack,
  IconButton,
  Box,
  Avatar,
  ScrollView,
  VStack,
  Stack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import "react-native-gesture-handler";

export default function AboutUs() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Box style={styles.box} size={8}>
          <Text style={styles.box_content}>
            What's In My Fridge is your go-to culinary companion, designed to
            simplify your cooking experience and ignite your creativity in the
            kitchen. With a range of features tailored to home cooks and food
            enthusiasts, this app is a treasure trove of delicious recipes and a
            handy tool to track your ingredients.
          </Text>
        </Box>
        <Text style={styles.version}>Version 1.0</Text>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    //justifyContent: "center",
  },
  box: {
    width: 350,
    height: 300,
    borderRadius: 10,
    backgroundColor: "#00000025",
  },

  version: {
    marginTop: 20,
    alignItems: "baseline",
    right: 130,
    fontWeight: "bold",
  },

  box_content: {
    margin: 20,
    justifyContent: "center",
    lineHeight: 25,
  },
});
