//Review.js
import {
  NativeBaseProvider,
  Box,
  AspectRatio,
  Center,
  Stack,
  Heading,
  HStack,
  ScrollView,
  Input,
  Pressable,
  Button,
  Flex,
  useDisclose,
  Actionsheet,
  KeyboardAvoidingView,
  Modal,
} from "native-base";
import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  ImageBackground,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import AddButton from "../../Home/IngredientsBox/addButton";
import { useRoute } from "@react-navigation/native";
import { firebase } from "../../../config";

const Review = ({ navigation }) => {
  const user = firebase.auth().currentUser;
  const recipeDataRef = firebase.firestore().collection(`/users/${user.uid}/myRecipes`);
  const recipeDraftRef = firebase.firestore().collection(`/users/${user.uid}/myDraft`);
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

  //   console.log(inputs);
  const handleStepByStepMode = () => {
    navigation.navigate("StepByStepMode", {
      dishName,
      hours,
      minutes,
      chefHatCount,
      descriptions,
      inputs,
      dishImageUri,
    });
  };
  const handlePublishButton = async () => {
    await addMyRecipe(); // Upload the recipe data first
    navigation.navigate("Done", {
      inputs,
    });
  };
  const handleDraftButton = async () => {
    await addMyDraft(); // Save the recipe data as a draft
    navigation.navigate("Done", {
      inputs,
    });
  };
  
  const addMyDraft = () => {
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
    recipeDraftRef.add(recipeData).catch((error) => {
      alert(error);
    });
  };
  

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
    <ScrollView style={styles.screen}>
      <View style={styles.top}></View>
      <Text style={styles.title}>{dishName}</Text>
      <View style={styles.DishPicture}>
        {dishImageUri ? (
          <Image source={{ uri: dishImageUri }} style={styles.dishimage} />
        ) : (
          <Text>No file included</Text>
        )}
      </View>
      <View style={styles.time}>
        <Text style={styles.heading}>Time</Text>
        <View style={styles.textBox}>
          <Text style={styles.text}>
            {hours} hours {minutes} minutes
          </Text>
        </View>
      </View>
      <View style={styles.difficulty}>
        <Text style={styles.heading}>Difficulty</Text>
        <View style={styles.chefhats}>
          {Array.from(Array(5).keys()).map((index) => (
            <Image
              key={index}
              source={require("../../../assets/Create/chefhat.jpg")}
              style={[
                styles.chefhat,
                { opacity: index > chefHatCount ? 0.3 : 1 },
              ]}
            />
          ))}
        </View>
      </View>
      <View style={styles.Descriptions}>
        <Text style={styles.heading}>Descriptions</Text>
        <View style={styles.textBox}>
          <Text style={styles.text}>{descriptions}</Text>
        </View>
      </View>
      <View style={styles.Steps}>
        <Text style={styles.heading}>Steps</Text>
        <View style={styles.textBox}>
          <Button
            onPress={handleStepByStepMode}
            style={styles.StepByStepModeButton}
          >
            Step By Step Mode
          </Button>
          {inputs.map((inputValue, index) => (
            <View key={index} style={styles.StepsTextContainer}>
              <Text style={styles.StepNumber}>{`${index + 1}.`}</Text>
              <Text style={styles.StepsText}>{inputValue.text}</Text>
            </View>
          ))}
        </View>
      </View>
      <Button style={styles.nextButton} onPress={handlePublishButton}>
        Publish
      </Button>
      <Button style={styles.draftButton} onPress={handleDraftButton}> 
        Save as draft
      </Button>
    </ScrollView>
  );
};

export default Review;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "#000",
    fontWeight: "700",
    fontSize: 25,
    textAlign: "center",
    marginBottom: 10,
  },
  screen: {
    flex: 1,
    display: "flex",
    backgroundColor: "#fff",
    padding: 10,
  },
  DishName: {},
  DishPicture: {
    justifyContent: "center",
    alignItems: "center",
  },
  durationPicker: {
    justifyContent: "center",
    alignItems: "center",
  },
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 325,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    marginBottom: 15,
  },
  picker: {
    flex: 1,
  },
  pickerItem: {
    fontSize: 40,
    height: 10,
  },
  pickerLabel: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  heading: {
    color: "#000",
    fontWeight: "700",
    fontSize: 20,
    paddingBottom: 5,
    paddingTop: 5,
    marginLeft: 10,
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    borderColor: "#ccc",
    padding: 5,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  },
  dishimage: {
    width: 300,
    height: 150,
    marginBottom: 20,
    borderRadius: 10,
  },
  chefhat: {
    width: 35,
    height: 35,
    marginRight: 5,
  },
  chefhats: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#FF0000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    padding: 5,
    marginLeft: 5,
  },
  plus_minus_buttons: {
    marginLeft: 20,
    flexDirection: "row",
  },
  Descriptions: {},

  inputDescription: {
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    borderColor: "#ccc",
    padding: 5,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    height: 100,
    textAlignVertical: "top",
  },

  nextButton: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    backgroundColor: "#9474ff",
  },
  difficulty: {},
  textBox: {
    borderRadius: 10,
    backgroundColor: "#F2F2F2",
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
  },
  StepsText: {
    lineHeight: 22,
    paddingRight: -100,
  },
  StepsTextContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginVertical: 4,
  },
  StepNumber: {
    marginRight: 8,
    fontWeight: "normal",
  },
  StepsText: {
    flex: 1,
    lineHeight: 19,
  },
  StepByStepModeButton: {
    width: 150,
    alignContent: "center",
    backgroundColor: "#9474ff",
  },
  draftButton: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: "#9474ff",
  }
});
