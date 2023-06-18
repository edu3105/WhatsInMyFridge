import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  NativeBaseProvider,
  HStack,
  IconButton,
  Box,
  Button,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
// import "react-native-gesture-handler";

const Done = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View style={styles.screen}>
        <Text>Recipe Created</Text>
        <Text>Created recipes can be viewed in your</Text>
        <Button onPress={() => navigation.navigate("Profile")}>Profile</Button>
      </View>
    </NativeBaseProvider>
  );
};

export default Done;

const styles = StyleSheet.create({});
