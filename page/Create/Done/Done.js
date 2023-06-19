import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Keyboard,
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
import { useRoute } from "@react-navigation/native";
import { firebase } from "../../../config";
import { useEffect } from "react";
// import "react-native-gesture-handler";

const Done = ({ navigation }) => {
  const user = firebase.auth().currentUser;
  const recipeDataRef = firebase
    .firestore()
    .collection(`/users/${user.uid}/myRecipes`);

  const route = useRoute();
  const {
    dishName,
    hours,
    minutes,
    chefHatCount,
    descriptions,
    inputs,
    dishImageUri,
  } = route.params;

  //coba-coba
  const [name, setName] = useState("");
  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log("Users doesnt exist");
        }
      }, []);
  });
  //----------------------------------

  const addMyRecipe = () => {
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();
    const recipeData = {
      DishName: dishName,
      duration: [hours, minutes],
      diffculty: chefHatCount + 1,
      desc: descriptions,
      steps: inputs,
      createdAt: timestamp,
      dishImage: dishImageUri,
    };
    recipeDataRef.add(recipeData).catch((error) => {
      alert(error);
    });
  };

  return (
    <NativeBaseProvider>
      <View style={styles.screen}>
        <Text>Recipe Created</Text>
        <Text>Created recipes can be viewed in your</Text>
        <Text> hello, {name.firstName}</Text>
        <Button onPress={() => navigation.navigate("Profile")}>Profile</Button>
        <Button onPress={addMyRecipe}>Add data</Button>
      </View>
    </NativeBaseProvider>
  );
};

export default Done;

const styles = StyleSheet.create({});
