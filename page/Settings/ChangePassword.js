import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
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

export default function ChangePassword() {
  const handleUpdatePress = () => {
    console.log("update_pressed");
  };
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <VStack>
          <Text style={styles.new}>Enter New Password</Text>
        </VStack>
        <VStack>
          <TextInput
            style={styles.inputField}
            placeholder="At Least 8 Digits"
            // Add other props and event handlers as needed
          />
        </VStack>
        <VStack>
          <Text style={styles.confirm}>Confirm Password</Text>
        </VStack>
        <VStack>
          <TextInput
            style={styles.inputField}
            placeholder="At Least 8 Digits"
            // Add other props and event handlers as needed
          />
        </VStack>

        <VStack style={styles.update_container}>
          <TouchableWithoutFeedback onPress={handleUpdatePress}>
            <View style={[styles.update]}>
              <Text style={styles.update_text}>Update</Text>
            </View>
          </TouchableWithoutFeedback>
        </VStack>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    //alignItems: "center",
    justifyContent: "center",
    //borderWidth: 1,
    marginTop: 200,
    margin: 20,
    padding: 10,
  },
  inputField: {
    width: "100%",
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 5,
  },

  new: {
    marginTop: 10,
  },

  confirm: {
    marginTop: 20,
  },

  update_container: {
    flex: 0,
    alignItems: "center",
    //justifyContent: "center",
    //borderWidth: 1,
    marginTop: 0,
    margin: 20,
    padding: 10,
    //borderWidth: 1,
  },

  update: {
    margin: 30,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "purple",
    //padding: 15,
  },

  update_text: {
    margin: 20,
    fontSize: 15,
    textAlign: "center",
    color: "white",
  },
});
