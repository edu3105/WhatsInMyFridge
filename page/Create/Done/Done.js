import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";
import { NativeBaseProvider, Button } from "native-base";
import { useNavigation } from "@react-navigation/native";
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
        <Button onPress={() => navigation.navigate("Profile")}>Profile</Button>
      </View>
    </NativeBaseProvider>
  );
};

export default Done;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  gifcontainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    // fontSize: 20,
  },
  profilebutton: {
    backgroundColor: "#9474ff",
    marginHorizontal: 100,
    marginTop: 20,
    width: 100,
  },
  gif: {
    width: 200,
    height: 200,
  },
});
