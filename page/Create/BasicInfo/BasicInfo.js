import { ScrollView } from "native-base";
import React from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";

const BasicInfo = () => {
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.top}></View>
      <View style={styles.DishPicture}>
        <Text style={styles.heading1}>Dish Picture</Text>
        <Image
          source={require("../../../assets/Create/cabbage.jpg")}
          style={styles.dishimage}
        />
      </View>
      <View style={styles.DishName}>
        <Text style={styles.heading1}>Dish Name</Text>
        <TextInput style={styles.input} placeholder="Dish name" />
      </View>
    </ScrollView>
  );
};

export default BasicInfo;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    display: "flex",
    //  justifyContent: "center",
    //  alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  top: {
    //  flexDirection: "row",
    //  alignItems: "center",
    //  justifyContent: "space-between",
  },
  DishName: {},

  text: {
    color: "#000",
    fontWeight: "500",
    fontSize: 17,
    textAlign: "right",
  },
  title: {
    color: "#000",
    fontWeight: "700",
    fontSize: 25,
    textAlign: "center",
  },

  heading1: {
    color: "#000",
    fontWeight: "700",
    fontSize: 20,
  },
  input: {
    borderRadius: 10, // Adjust the value as needed
    backgroundColor: "#F2F2F2",
    borderColor: "#ccc",
    padding: 5,
  },
  dishimage: {
    width: 350,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});
