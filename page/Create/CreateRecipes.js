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
import "react-native-gesture-handler";

const AddScreen = ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <View style={styles.screen}>
        <ImageBackground
          source={require("../../assets/Create/FeatherPen2.png")}
          style={styles.image}
        />
        <Button onPress={() => navigation.navigate("Basic Information")}>
          Start Writing
        </Button>
      </View>
    </NativeBaseProvider>
  );
};

export default AddScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  button: {
    backgroundColor: "#0275d8",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 25,
  },
  image: {
    width: 285,
    height: 225,
    marginBottom: 20,

    //  position: "absolute",
  },
});
